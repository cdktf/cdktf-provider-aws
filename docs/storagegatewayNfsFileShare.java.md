# `storagegatewayNfsFileShare` Submodule <a name="`storagegatewayNfsFileShare` Submodule" id="@cdktf/provider-aws.storagegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayNfsFileShare <a name="StoragegatewayNfsFileShare" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share aws_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.Builder.create(Construct scope, java.lang.String id)
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
    .clientList(java.util.List<java.lang.String>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .roleArn(java.lang.String)
//  .auditDestinationArn(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewayNfsFileShareCacheAttributes)
//  .defaultStorageClass(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean)
//  .guessMimeTypeEnabled(IResolvable)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .nfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .squash(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StoragegatewayNfsFileShareTimeouts)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | nfs_file_share_defaults block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash">squash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}.

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

nfs_file_share_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}.

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#timeouts StoragegatewayNfsFileShare#timeouts}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults">putNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults">resetNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash">resetSquash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes"></a>

```java
public void putCacheAttributes(StoragegatewayNfsFileShareCacheAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `putNfsFileShareDefaults` <a name="putNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults"></a>

```java
public void putNfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts"></a>

```java
public void putTimeouts(StoragegatewayNfsFileShareTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a>

---

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn"></a>

```java
public void resetAuditDestinationArn()
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion"></a>

```java
public void resetBucketRegion()
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes"></a>

```java
public void resetCacheAttributes()
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass"></a>

```java
public void resetDefaultStorageClass()
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName"></a>

```java
public void resetFileShareName()
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled"></a>

```java
public void resetGuessMimeTypeEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetId"></a>

```java
public void resetId()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetNfsFileShareDefaults` <a name="resetNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults"></a>

```java
public void resetNfsFileShareDefaults()
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy"></a>

```java
public void resetNotificationPolicy()
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl"></a>

```java
public void resetObjectAcl()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetSquash` <a name="resetSquash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash"></a>

```java
public void resetSquash()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName"></a>

```java
public void resetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileshareId">fileshareId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference">StoragegatewayNfsFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput">clientListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput">locationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput">nfsFileShareDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput">objectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput">squashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes"></a>

```java
public StoragegatewayNfsFileShareCacheAttributesOutputReference getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `fileshareId`<sup>Required</sup> <a name="fileshareId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileshareId"></a>

```java
public java.lang.String getFileshareId();
```

- *Type:* java.lang.String

---

##### `nfsFileShareDefaults`<sup>Required</sup> <a name="nfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference getNfsFileShareDefaults();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeouts"></a>

```java
public StoragegatewayNfsFileShareTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference">StoragegatewayNfsFileShareTimeoutsOutputReference</a>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput"></a>

```java
public java.lang.String getAuditDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput"></a>

```java
public java.lang.String getBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput"></a>

```java
public StoragegatewayNfsFileShareCacheAttributes getCacheAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `clientListInput`<sup>Optional</sup> <a name="clientListInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput"></a>

```java
public java.util.List<java.lang.String> getClientListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput"></a>

```java
public java.lang.String getDefaultStorageClassInput();
```

- *Type:* java.lang.String

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput"></a>

```java
public java.lang.String getFileShareNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput"></a>

```java
public java.lang.Object getGuessMimeTypeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput"></a>

```java
public java.lang.Object getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput"></a>

```java
public java.lang.String getLocationArnInput();
```

- *Type:* java.lang.String

---

##### `nfsFileShareDefaultsInput`<sup>Optional</sup> <a name="nfsFileShareDefaultsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaults getNfsFileShareDefaultsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput"></a>

```java
public java.lang.String getNotificationPolicyInput();
```

- *Type:* java.lang.String

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput"></a>

```java
public java.lang.String getObjectAclInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput"></a>

```java
public java.lang.Object getRequesterPaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput"></a>

```java
public java.lang.String getSquashInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput"></a>

```java
public java.lang.String getVpcEndpointDnsNameInput();
```

- *Type:* java.lang.String

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList"></a>

```java
public java.util.List<java.lang.String> getClientList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Object getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayNfsFileShareCacheAttributes <a name="StoragegatewayNfsFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareCacheAttributes;

StoragegatewayNfsFileShareCacheAttributes.builder()
//  .cacheStaleTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewayNfsFileShareConfig <a name="StoragegatewayNfsFileShareConfig" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareConfig;

StoragegatewayNfsFileShareConfig.builder()
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
    .clientList(java.util.List<java.lang.String>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .roleArn(java.lang.String)
//  .auditDestinationArn(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewayNfsFileShareCacheAttributes)
//  .defaultStorageClass(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean)
//  .guessMimeTypeEnabled(IResolvable)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .nfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .squash(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StoragegatewayNfsFileShareTimeouts)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | nfs_file_share_defaults block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash">squash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList"></a>

```java
public java.util.List<java.lang.String> getClientList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes"></a>

```java
public StoragegatewayNfsFileShareCacheAttributes getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}.

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}.

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Object getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}.

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaults getNfsFileShareDefaults();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

nfs_file_share_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}.

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}.

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}.

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.timeouts"></a>

```java
public StoragegatewayNfsFileShareTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#timeouts StoragegatewayNfsFileShare#timeouts}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewayNfsFileShareNfsFileShareDefaults <a name="StoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareNfsFileShareDefaults;

StoragegatewayNfsFileShareNfsFileShareDefaults.builder()
//  .directoryMode(java.lang.String)
//  .fileMode(java.lang.String)
//  .groupId(java.lang.String)
//  .ownerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode">directoryMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}. |

---

##### `directoryMode`<sup>Optional</sup> <a name="directoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode"></a>

```java
public java.lang.String getDirectoryMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}.

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}.

---

### StoragegatewayNfsFileShareTimeouts <a name="StoragegatewayNfsFileShareTimeouts" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareTimeouts;

StoragegatewayNfsFileShareTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#create StoragegatewayNfsFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#delete StoragegatewayNfsFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#update StoragegatewayNfsFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#create StoragegatewayNfsFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#delete StoragegatewayNfsFileShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share#update StoragegatewayNfsFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayNfsFileShareCacheAttributesOutputReference <a name="StoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareCacheAttributesOutputReference;

new StoragegatewayNfsFileShareCacheAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```java
public void resetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```java
public StoragegatewayNfsFileShareCacheAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---


### StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;

new StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode">resetDirectoryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId">resetOwnerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryMode` <a name="resetDirectoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode"></a>

```java
public void resetDirectoryMode()
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode"></a>

```java
public void resetFileMode()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId"></a>

```java
public void resetOwnerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput">directoryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directoryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryModeInput`<sup>Optional</sup> <a name="directoryModeInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput"></a>

```java
public java.lang.String getDirectoryModeInput();
```

- *Type:* java.lang.String

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput"></a>

```java
public java.lang.String getFileModeInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `directoryMode`<sup>Required</sup> <a name="directoryMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```java
public java.lang.String getDirectoryMode();
```

- *Type:* java.lang.String

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### StoragegatewayNfsFileShareTimeoutsOutputReference <a name="StoragegatewayNfsFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_nfs_file_share.StoragegatewayNfsFileShareTimeoutsOutputReference;

new StoragegatewayNfsFileShareTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTimeouts">StoragegatewayNfsFileShareTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



