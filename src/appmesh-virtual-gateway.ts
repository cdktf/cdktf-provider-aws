// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
  */
  readonly spec: AppmeshVirtualGatewaySpec[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
  */
  readonly privateKey: string;
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
  */
  readonly exact: string[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
  */
  readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
  */
  readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
  */
  readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
    trust: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
  */
  readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate[];
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
  */
  readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct!.certificate),
    validation: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
  */
  readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaults {
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy[];
}

function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_policy: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
  */
  readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc[];
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
  */
  readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp[];
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
  */
  readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2[];
}

function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
  }
}

export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheck): any {
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

export interface AppmeshVirtualGatewaySpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
  */
  readonly protocol: string;
}

function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}
  */
  readonly certificateArn: string;
}

function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
  */
  readonly privateKey: string;
}

function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
  */
  readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm[];
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds[];
}

function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
  */
  readonly exact: string[];
}

function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
  */
  readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch[];
}

function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
}

function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile[];
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds[];
}

function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform)(struct!.file),
    sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform)(struct!.sds),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames[];
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
  */
  readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust[];
}

function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
    trust: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
  */
  readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate[];
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
  */
  readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation[];
}

function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform)(struct!.certificate),
    validation: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualGatewaySpecListener {
  /**
  * connection_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
  */
  readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool[];
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
  */
  readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck[];
  /**
  * port_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
  */
  readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping[];
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
  */
  readonly tls?: AppmeshVirtualGatewaySpecListenerTls[];
}

function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_pool: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
    health_check: cdktf.listMapper(appmeshVirtualGatewaySpecListenerHealthCheckToTerraform)(struct!.healthCheck),
    port_mapping: cdktf.listMapper(appmeshVirtualGatewaySpecListenerPortMappingToTerraform)(struct!.portMapping),
    tls: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
  */
  readonly path: string;
}

function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile[];
}

function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualGatewaySpecLogging {
  /**
  * access_log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
  */
  readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog[];
}

function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_log: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogToTerraform)(struct!.accessLog),
  }
}

export interface AppmeshVirtualGatewaySpec {
  /**
  * backend_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
  */
  readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults[];
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
  */
  readonly listener: AppmeshVirtualGatewaySpecListener[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
  */
  readonly logging?: AppmeshVirtualGatewaySpecLogging[];
}

function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_defaults: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsToTerraform)(struct!.backendDefaults),
    listener: cdktf.listMapper(appmeshVirtualGatewaySpecListenerToTerraform)(struct!.listener),
    logging: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingToTerraform)(struct!.logging),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
*/
export class AppmeshVirtualGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_gateway',
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
  private _spec: AppmeshVirtualGatewaySpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualGatewaySpec[]) {
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
      spec: cdktf.listMapper(appmeshVirtualGatewaySpecToTerraform)(this._spec),
    };
  }
}
