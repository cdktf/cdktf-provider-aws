# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktf/provider-aws.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share aws_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .roleArn(java.lang.String)
//  .accessBasedEnumeration(java.lang.Boolean)
//  .accessBasedEnumeration(IResolvable)
//  .adminUserList(java.util.List<java.lang.String>)
//  .auditDestinationArn(java.lang.String)
//  .authentication(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewaySmbFileShareCacheAttributes)
//  .caseSensitivity(java.lang.String)
//  .defaultStorageClass(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean)
//  .guessMimeTypeEnabled(IResolvable)
//  .id(java.lang.String)
//  .invalidUserList(java.util.List<java.lang.String>)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .oplocksEnabled(java.lang.Boolean)
//  .oplocksEnabled(IResolvable)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .smbAclEnabled(java.lang.Boolean)
//  .smbAclEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StoragegatewaySmbFileShareTimeouts)
//  .validUserList(java.util.List<java.lang.String>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication">authentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbAclEnabled">smbAclEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="accessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `adminUserList`<sup>Optional</sup> <a name="adminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `caseSensitivity`<sup>Optional</sup> <a name="caseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invalidUserList`<sup>Optional</sup> <a name="invalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `oplocksEnabled`<sup>Optional</sup> <a name="oplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `smbAclEnabled`<sup>Optional</sup> <a name="smbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbAclEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `validUserList`<sup>Optional</sup> <a name="validUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">resetAccessBasedEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">resetAdminUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">resetCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">resetInvalidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">resetOplocksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled">resetSmbAclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">resetValidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```java
public void putCacheAttributes(StoragegatewaySmbFileShareCacheAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts"></a>

```java
public void putTimeouts(StoragegatewaySmbFileShareTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

---

##### `resetAccessBasedEnumeration` <a name="resetAccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```java
public void resetAccessBasedEnumeration()
```

##### `resetAdminUserList` <a name="resetAdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```java
public void resetAdminUserList()
```

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```java
public void resetAuditDestinationArn()
```

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```java
public void resetBucketRegion()
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```java
public void resetCacheAttributes()
```

##### `resetCaseSensitivity` <a name="resetCaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```java
public void resetCaseSensitivity()
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```java
public void resetDefaultStorageClass()
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```java
public void resetFileShareName()
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```java
public void resetGuessMimeTypeEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId"></a>

```java
public void resetId()
```

##### `resetInvalidUserList` <a name="resetInvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```java
public void resetInvalidUserList()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```java
public void resetNotificationPolicy()
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```java
public void resetObjectAcl()
```

##### `resetOplocksEnabled` <a name="resetOplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```java
public void resetOplocksEnabled()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetSmbAclEnabled` <a name="resetSmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled"></a>

```java
public void resetSmbAclEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidUserList` <a name="resetValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```java
public void resetValidUserList()
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```java
public void resetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId">fileshareId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">accessBasedEnumerationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">adminUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">authenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">caseSensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">invalidUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">locationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">objectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">oplocksEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput">smbAclEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">validUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">authentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled">smbAclEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```java
public StoragegatewaySmbFileShareCacheAttributesOutputReference getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `fileshareId`<sup>Required</sup> <a name="fileshareId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId"></a>

```java
public java.lang.String getFileshareId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts"></a>

```java
public StoragegatewaySmbFileShareTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a>

---

##### `accessBasedEnumerationInput`<sup>Optional</sup> <a name="accessBasedEnumerationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```java
public java.lang.Object getAccessBasedEnumerationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminUserListInput`<sup>Optional</sup> <a name="adminUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```java
public java.util.List<java.lang.String> getAdminUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```java
public java.lang.String getAuditDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```java
public java.lang.String getAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```java
public java.lang.String getBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```java
public StoragegatewaySmbFileShareCacheAttributes getCacheAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `caseSensitivityInput`<sup>Optional</sup> <a name="caseSensitivityInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```java
public java.lang.String getCaseSensitivityInput();
```

- *Type:* java.lang.String

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```java
public java.lang.String getDefaultStorageClassInput();
```

- *Type:* java.lang.String

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```java
public java.lang.String getFileShareNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```java
public java.lang.Object getGuessMimeTypeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invalidUserListInput`<sup>Optional</sup> <a name="invalidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```java
public java.util.List<java.lang.String> getInvalidUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```java
public java.lang.Object getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```java
public java.lang.String getLocationArnInput();
```

- *Type:* java.lang.String

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```java
public java.lang.String getNotificationPolicyInput();
```

- *Type:* java.lang.String

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```java
public java.lang.String getObjectAclInput();
```

- *Type:* java.lang.String

---

##### `oplocksEnabledInput`<sup>Optional</sup> <a name="oplocksEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```java
public java.lang.Object getOplocksEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```java
public java.lang.Object getRequesterPaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `smbAclEnabledInput`<sup>Optional</sup> <a name="smbAclEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput"></a>

```java
public java.lang.Object getSmbAclEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `validUserListInput`<sup>Optional</sup> <a name="validUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```java
public java.util.List<java.lang.String> getValidUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```java
public java.lang.String getVpcEndpointDnsNameInput();
```

- *Type:* java.lang.String

---

##### `accessBasedEnumeration`<sup>Required</sup> <a name="accessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```java
public java.lang.Object getAccessBasedEnumeration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminUserList`<sup>Required</sup> <a name="adminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```java
public java.util.List<java.lang.String> getAdminUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `caseSensitivity`<sup>Required</sup> <a name="caseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```java
public java.lang.String getCaseSensitivity();
```

- *Type:* java.lang.String

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Object getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invalidUserList`<sup>Required</sup> <a name="invalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```java
public java.util.List<java.lang.String> getInvalidUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

---

##### `oplocksEnabled`<sup>Required</sup> <a name="oplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```java
public java.lang.Object getOplocksEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `smbAclEnabled`<sup>Required</sup> <a name="smbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled"></a>

```java
public java.lang.Object getSmbAclEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validUserList`<sup>Required</sup> <a name="validUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```java
public java.util.List<java.lang.String> getValidUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShareCacheAttributes;

StoragegatewaySmbFileShareCacheAttributes.builder()
//  .cacheStaleTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShareConfig;

StoragegatewaySmbFileShareConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .roleArn(java.lang.String)
//  .accessBasedEnumeration(java.lang.Boolean)
//  .accessBasedEnumeration(IResolvable)
//  .adminUserList(java.util.List<java.lang.String>)
//  .auditDestinationArn(java.lang.String)
//  .authentication(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewaySmbFileShareCacheAttributes)
//  .caseSensitivity(java.lang.String)
//  .defaultStorageClass(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean)
//  .guessMimeTypeEnabled(IResolvable)
//  .id(java.lang.String)
//  .invalidUserList(java.util.List<java.lang.String>)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .oplocksEnabled(java.lang.Boolean)
//  .oplocksEnabled(IResolvable)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .smbAclEnabled(java.lang.Boolean)
//  .smbAclEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StoragegatewaySmbFileShareTimeouts)
//  .validUserList(java.util.List<java.lang.String>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">authentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled">smbAclEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="accessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```java
public java.lang.Object getAccessBasedEnumeration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `adminUserList`<sup>Optional</sup> <a name="adminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```java
public java.util.List<java.lang.String> getAdminUserList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```java
public StoragegatewaySmbFileShareCacheAttributes getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `caseSensitivity`<sup>Optional</sup> <a name="caseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```java
public java.lang.String getCaseSensitivity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Object getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invalidUserList`<sup>Optional</sup> <a name="invalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```java
public java.util.List<java.lang.String> getInvalidUserList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `oplocksEnabled`<sup>Optional</sup> <a name="oplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```java
public java.lang.Object getOplocksEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `smbAclEnabled`<sup>Optional</sup> <a name="smbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled"></a>

```java
public java.lang.Object getSmbAclEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts"></a>

```java
public StoragegatewaySmbFileShareTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `validUserList`<sup>Optional</sup> <a name="validUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```java
public java.util.List<java.lang.String> getValidUserList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewaySmbFileShareTimeouts <a name="StoragegatewaySmbFileShareTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShareTimeouts;

StoragegatewaySmbFileShareTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShareCacheAttributesOutputReference;

new StoragegatewaySmbFileShareCacheAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```java
public void resetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```java
public StoragegatewaySmbFileShareCacheAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTimeoutsOutputReference <a name="StoragegatewaySmbFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_smb_file_share.StoragegatewaySmbFileShareTimeoutsOutputReference;

new StoragegatewaySmbFileShareTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



