// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
  */
  readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm[];
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames[];
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
    trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate[];
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform)(struct!.certificate),
    validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}
  */
  readonly virtualServiceName: string;
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualNodeSpecBackend {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
  */
  readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService[];
}

function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct!.virtualService),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
    trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate[];
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct!.certificate),
    validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaults {
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy[];
}

function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPool {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc[];
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[];
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[];
  /**
  * tcp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[];
}

function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
    tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform)(struct!.tcp),
  }
}

export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
  */
  readonly maxEjectionPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}
  */
  readonly maxServerErrors: number;
  /**
  * base_ejection_duration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
  */
  readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration[];
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
  */
  readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval[];
}

function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
    base_ejection_duration: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform)(struct!.baseEjectionDuration),
    interval: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform)(struct!.interval),
  }
}

export interface AppmeshVirtualNodeSpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
}

function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle[];
}

function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform)(struct!.idle),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeout {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc[];
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp[];
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2[];
  /**
  * tcp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp[];
}

function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform)(struct!.http2),
    tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform)(struct!.tcp),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}
  */
  readonly certificateArn: string;
}

function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm[];
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds[];
}

function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch[];
}

function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds[];
}

function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames[];
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust[];
}

function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
    trust: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualNodeSpecListenerTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate[];
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation[];
}

function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateToTerraform)(struct!.certificate),
    validation: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualNodeSpecListener {
  /**
  * connection_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
  */
  readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool[];
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
  */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
  */
  readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection[];
  /**
  * port_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
  */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
  */
  readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout[];
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecListenerTls[];
}

function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_pool: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
    health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct!.healthCheck),
    outlier_detection: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform)(struct!.outlierDetection),
    port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct!.portMapping),
    timeout: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutToTerraform)(struct!.timeout),
    tls: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
  */
  readonly path: string;
}

function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
}

function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualNodeSpecLogging {
  /**
  * access_log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
  */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
}

function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_log: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogToTerraform)(struct!.accessLog),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}
  */
  readonly serviceName: string;
}

function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}
  */
  readonly hostname: string;
}

function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /**
  * aws_cloud_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
  */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
  */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
}

function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_cloud_map: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform)(struct!.awsCloudMap),
    dns: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform)(struct!.dns),
  }
}

export interface AppmeshVirtualNodeSpec {
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
  */
  readonly backend?: AppmeshVirtualNodeSpecBackend[];
  /**
  * backend_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
  */
  readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults[];
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
  */
  readonly listener?: AppmeshVirtualNodeSpecListener[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
  */
  readonly logging?: AppmeshVirtualNodeSpecLogging[];
  /**
  * service_discovery block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
  */
  readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery[];
}

function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
    backend_defaults: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsToTerraform)(struct!.backendDefaults),
    listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform)(struct!.listener),
    logging: cdktf.listMapper(appmeshVirtualNodeSpecLoggingToTerraform)(struct!.logging),
    service_discovery: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryToTerraform)(struct!.serviceDiscovery),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
*/
export class AppmeshVirtualNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualNodeConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string;
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualNodeSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualNodeSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec),
    };
  }
}
