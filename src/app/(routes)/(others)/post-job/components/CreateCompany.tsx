"use client";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export default function CreateCompany() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [companyName, setCompanyName] = useState<string>("");

  const user = useUser();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="mt-5">
      <Button onPress={onOpen} variant="solid" color="primary" radius="sm">
        <div className="flex items-center gap-2 font-semibold">
          Create a Company <ArrowRight />
        </div>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onOpenChange}
        placement="auto"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <React.Fragment>
              <ModalHeader>Create a Company</ModalHeader>
              <ModalBody>
                <p className="paragraph">Start by adding a company name</p>
                <form
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    if (user !== null && user.user !== null) {
                      console.log("Form Action Triggered");
                      const organizationData = {
                        name: companyName,
                        createdBy: user.user?.id,
                      };
                      try {
                        setIsLoading(true);
                        const response = await axios.post(
                          "/api/create-company",
                          organizationData
                        );
                        console.log("response", response);
                        toast({ title: "Company created", color: "success" });
                      } catch (error) {
                        console.error(error);
                        toast({
                          title: "Failed to create company",
                          color: "error",
                        });
                      } finally {
                        onClose();
                        setIsLoading(false);
                      }
                    }
                  }}
                  className="flex flex-col gap-4"
                >
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    radius="sm"
                    className="w-fit"
                    isLoading={isLoading}
                  >
                    Create Company
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </React.Fragment>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
