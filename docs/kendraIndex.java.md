# `kendraIndex` Submodule <a name="`kendraIndex` Submodule" id="@cdktf/provider-aws.kendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraIndex <a name="KendraIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndex;

KendraIndex.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .capacityUnits(KendraIndexCapacityUnits)
//  .description(java.lang.String)
//  .documentMetadataConfigurationUpdates(IResolvable)
//  .documentMetadataConfigurationUpdates(java.util.List<KendraIndexDocumentMetadataConfigurationUpdates>)
//  .edition(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryptionConfiguration(KendraIndexServerSideEncryptionConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KendraIndexTimeouts)
//  .userContextPolicy(java.lang.String)
//  .userGroupResolutionConfiguration(KendraIndexUserGroupResolutionConfiguration)
//  .userTokenConfigurations(KendraIndexUserTokenConfigurations)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | capacity_units block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.documentMetadataConfigurationUpdates">documentMetadataConfigurationUpdates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>></code> | document_metadata_configuration_updates block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userContextPolicy">userContextPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userGroupResolutionConfiguration">userGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | user_group_resolution_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | user_token_configurations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}.

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.capacityUnits"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

capacity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}.

---

##### `documentMetadataConfigurationUpdates`<sup>Optional</sup> <a name="documentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.documentMetadataConfigurationUpdates"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>>

document_metadata_configuration_updates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}

---

##### `userContextPolicy`<sup>Optional</sup> <a name="userContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userContextPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `userGroupResolutionConfiguration`<sup>Optional</sup> <a name="userGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userGroupResolutionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

user_group_resolution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}

---

##### `userTokenConfigurations`<sup>Optional</sup> <a name="userTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.userTokenConfigurations"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

user_token_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits">putCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates">putDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration">putUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations">putUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits">resetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates">resetDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy">resetUserContextPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration">resetUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations">resetUserTokenConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacityUnits` <a name="putCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits"></a>

```java
public void putCapacityUnits(KendraIndexCapacityUnits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `putDocumentMetadataConfigurationUpdates` <a name="putDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates"></a>

```java
public void putDocumentMetadataConfigurationUpdates(IResolvable OR java.util.List<KendraIndexDocumentMetadataConfigurationUpdates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>>

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration"></a>

```java
public void putServerSideEncryptionConfiguration(KendraIndexServerSideEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts"></a>

```java
public void putTimeouts(KendraIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

---

##### `putUserGroupResolutionConfiguration` <a name="putUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration"></a>

```java
public void putUserGroupResolutionConfiguration(KendraIndexUserGroupResolutionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `putUserTokenConfigurations` <a name="putUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations"></a>

```java
public void putUserTokenConfigurations(KendraIndexUserTokenConfigurations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `resetCapacityUnits` <a name="resetCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits"></a>

```java
public void resetCapacityUnits()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentMetadataConfigurationUpdates` <a name="resetDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates"></a>

```java
public void resetDocumentMetadataConfigurationUpdates()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetId"></a>

```java
public void resetId()
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration"></a>

```java
public void resetServerSideEncryptionConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserContextPolicy` <a name="resetUserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy"></a>

```java
public void resetUserContextPolicy()
```

##### `resetUserGroupResolutionConfiguration` <a name="resetUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration"></a>

```java
public void resetUserGroupResolutionConfiguration()
```

##### `resetUserTokenConfigurations` <a name="resetUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations"></a>

```java
public void resetUserTokenConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndex;

KendraIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndex;

KendraIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndex;

KendraIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates">documentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics">indexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration">userGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput">capacityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput">documentMetadataConfigurationUpdatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput">userContextPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput">userGroupResolutionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput">userTokenConfigurationsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy">userContextPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits"></a>

```java
public KendraIndexCapacityUnitsOutputReference getCapacityUnits();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `documentMetadataConfigurationUpdates`<sup>Required</sup> <a name="documentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesList getDocumentMetadataConfigurationUpdates();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `indexStatistics`<sup>Required</sup> <a name="indexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics"></a>

```java
public KendraIndexIndexStatisticsList getIndexStatistics();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a>

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration"></a>

```java
public KendraIndexServerSideEncryptionConfigurationOutputReference getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts"></a>

```java
public KendraIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `userGroupResolutionConfiguration`<sup>Required</sup> <a name="userGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration"></a>

```java
public KendraIndexUserGroupResolutionConfigurationOutputReference getUserGroupResolutionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a>

---

##### `userTokenConfigurations`<sup>Required</sup> <a name="userTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations"></a>

```java
public KendraIndexUserTokenConfigurationsOutputReference getUserTokenConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a>

---

##### `capacityUnitsInput`<sup>Optional</sup> <a name="capacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput"></a>

```java
public KendraIndexCapacityUnits getCapacityUnitsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentMetadataConfigurationUpdatesInput`<sup>Optional</sup> <a name="documentMetadataConfigurationUpdatesInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput"></a>

```java
public java.lang.Object getDocumentMetadataConfigurationUpdatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>>

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput"></a>

```java
public KendraIndexServerSideEncryptionConfiguration getServerSideEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userContextPolicyInput`<sup>Optional</sup> <a name="userContextPolicyInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput"></a>

```java
public java.lang.String getUserContextPolicyInput();
```

- *Type:* java.lang.String

---

##### `userGroupResolutionConfigurationInput`<sup>Optional</sup> <a name="userGroupResolutionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput"></a>

```java
public KendraIndexUserGroupResolutionConfiguration getUserGroupResolutionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `userTokenConfigurationsInput`<sup>Optional</sup> <a name="userTokenConfigurationsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput"></a>

```java
public KendraIndexUserTokenConfigurations getUserTokenConfigurationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userContextPolicy`<sup>Required</sup> <a name="userContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy"></a>

```java
public java.lang.String getUserContextPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KendraIndexCapacityUnits <a name="KendraIndexCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexCapacityUnits;

KendraIndexCapacityUnits.builder()
//  .queryCapacityUnits(java.lang.Number)
//  .storageCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}. |

---

##### `queryCapacityUnits`<sup>Optional</sup> <a name="queryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits"></a>

```java
public java.lang.Number getQueryCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

##### `storageCapacityUnits`<sup>Optional</sup> <a name="storageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits"></a>

```java
public java.lang.Number getStorageCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

### KendraIndexConfig <a name="KendraIndexConfig" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexConfig;

KendraIndexConfig.builder()
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
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .capacityUnits(KendraIndexCapacityUnits)
//  .description(java.lang.String)
//  .documentMetadataConfigurationUpdates(IResolvable)
//  .documentMetadataConfigurationUpdates(java.util.List<KendraIndexDocumentMetadataConfigurationUpdates>)
//  .edition(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryptionConfiguration(KendraIndexServerSideEncryptionConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KendraIndexTimeouts)
//  .userContextPolicy(java.lang.String)
//  .userGroupResolutionConfiguration(KendraIndexUserGroupResolutionConfiguration)
//  .userTokenConfigurations(KendraIndexUserTokenConfigurations)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | capacity_units block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates">documentMetadataConfigurationUpdates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>></code> | document_metadata_configuration_updates block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy">userContextPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration">userGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | user_group_resolution_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | user_token_configurations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}.

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits"></a>

```java
public KendraIndexCapacityUnits getCapacityUnits();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

capacity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}.

---

##### `documentMetadataConfigurationUpdates`<sup>Optional</sup> <a name="documentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates"></a>

```java
public java.lang.Object getDocumentMetadataConfigurationUpdates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>>

document_metadata_configuration_updates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration"></a>

```java
public KendraIndexServerSideEncryptionConfiguration getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts"></a>

```java
public KendraIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}

---

##### `userContextPolicy`<sup>Optional</sup> <a name="userContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy"></a>

```java
public java.lang.String getUserContextPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `userGroupResolutionConfiguration`<sup>Optional</sup> <a name="userGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration"></a>

```java
public KendraIndexUserGroupResolutionConfiguration getUserGroupResolutionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

user_group_resolution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}

---

##### `userTokenConfigurations`<sup>Optional</sup> <a name="userTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations"></a>

```java
public KendraIndexUserTokenConfigurations getUserTokenConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

user_token_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}

---

### KendraIndexDocumentMetadataConfigurationUpdates <a name="KendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdates;

KendraIndexDocumentMetadataConfigurationUpdates.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .relevance(KendraIndexDocumentMetadataConfigurationUpdatesRelevance)
//  .search(KendraIndexDocumentMetadataConfigurationUpdatesSearch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance">relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | relevance block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search">search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | search block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}.

---

##### `relevance`<sup>Optional</sup> <a name="relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance getRelevance();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

relevance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#relevance KendraIndex#relevance}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesSearch getSearch();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

search block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#search KendraIndex#search}

---

### KendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesRelevance;

KendraIndexDocumentMetadataConfigurationUpdatesRelevance.builder()
//  .duration(java.lang.String)
//  .freshness(java.lang.Boolean)
//  .freshness(IResolvable)
//  .importance(java.lang.Number)
//  .rankOrder(java.lang.String)
//  .valuesImportanceMap(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness">freshness</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance">importance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder">rankOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap">valuesImportanceMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}.

---

##### `freshness`<sup>Optional</sup> <a name="freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness"></a>

```java
public java.lang.Object getFreshness();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}.

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance"></a>

```java
public java.lang.Number getImportance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}.

---

##### `rankOrder`<sup>Optional</sup> <a name="rankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder"></a>

```java
public java.lang.String getRankOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}.

---

##### `valuesImportanceMap`<sup>Optional</sup> <a name="valuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getValuesImportanceMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}.

---

### KendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesSearch;

KendraIndexDocumentMetadataConfigurationUpdatesSearch.builder()
//  .displayable(java.lang.Boolean)
//  .displayable(IResolvable)
//  .facetable(java.lang.Boolean)
//  .facetable(IResolvable)
//  .searchable(java.lang.Boolean)
//  .searchable(IResolvable)
//  .sortable(java.lang.Boolean)
//  .sortable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable">displayable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable">facetable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable">searchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable">sortable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}. |

---

##### `displayable`<sup>Optional</sup> <a name="displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable"></a>

```java
public java.lang.Object getDisplayable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}.

---

##### `facetable`<sup>Optional</sup> <a name="facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable"></a>

```java
public java.lang.Object getFacetable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}.

---

##### `searchable`<sup>Optional</sup> <a name="searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable"></a>

```java
public java.lang.Object getSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}.

---

##### `sortable`<sup>Optional</sup> <a name="sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable"></a>

```java
public java.lang.Object getSortable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}.

---

### KendraIndexIndexStatistics <a name="KendraIndexIndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatistics;

KendraIndexIndexStatistics.builder()
    .build();
```


### KendraIndexIndexStatisticsFaqStatistics <a name="KendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsFaqStatistics;

KendraIndexIndexStatisticsFaqStatistics.builder()
    .build();
```


### KendraIndexIndexStatisticsTextDocumentStatistics <a name="KendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsTextDocumentStatistics;

KendraIndexIndexStatisticsTextDocumentStatistics.builder()
    .build();
```


### KendraIndexServerSideEncryptionConfiguration <a name="KendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexServerSideEncryptionConfiguration;

KendraIndexServerSideEncryptionConfiguration.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

### KendraIndexTimeouts <a name="KendraIndexTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexTimeouts;

KendraIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}.

---

### KendraIndexUserGroupResolutionConfiguration <a name="KendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserGroupResolutionConfiguration;

KendraIndexUserGroupResolutionConfiguration.builder()
    .userGroupResolutionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode">userGroupResolutionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}. |

---

##### `userGroupResolutionMode`<sup>Required</sup> <a name="userGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode"></a>

```java
public java.lang.String getUserGroupResolutionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}.

---

### KendraIndexUserTokenConfigurations <a name="KendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurations;

KendraIndexUserTokenConfigurations.builder()
//  .jsonTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration)
//  .jwtTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | json_token_type_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | jwt_token_type_configuration block. |

---

##### `jsonTokenTypeConfiguration`<sup>Optional</sup> <a name="jsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration"></a>

```java
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration getJsonTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

json_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}

---

##### `jwtTokenTypeConfiguration`<sup>Optional</sup> <a name="jwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration"></a>

```java
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration getJwtTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

jwt_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}

---

### KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;

KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.builder()
    .groupAttributeField(java.lang.String)
    .userNameAttributeField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

### KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;

KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.builder()
    .keyLocation(java.lang.String)
//  .claimRegex(java.lang.String)
//  .groupAttributeField(java.lang.String)
//  .issuer(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .url(java.lang.String)
//  .userNameAttributeField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation">keyLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex">claimRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation"></a>

```java
public java.lang.String getKeyLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}.

---

##### `claimRegex`<sup>Optional</sup> <a name="claimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex"></a>

```java
public java.lang.String getClaimRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}.

---

##### `groupAttributeField`<sup>Optional</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}.

---

##### `userNameAttributeField`<sup>Optional</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraIndexCapacityUnitsOutputReference <a name="KendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexCapacityUnitsOutputReference;

new KendraIndexCapacityUnitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits">resetQueryCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits">resetStorageCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryCapacityUnits` <a name="resetQueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits"></a>

```java
public void resetQueryCapacityUnits()
```

##### `resetStorageCapacityUnits` <a name="resetStorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits"></a>

```java
public void resetStorageCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput">queryCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput">storageCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryCapacityUnitsInput`<sup>Optional</sup> <a name="queryCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput"></a>

```java
public java.lang.Number getQueryCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `storageCapacityUnitsInput`<sup>Optional</sup> <a name="storageCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput"></a>

```java
public java.lang.Number getStorageCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `queryCapacityUnits`<sup>Required</sup> <a name="queryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```java
public java.lang.Number getQueryCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `storageCapacityUnits`<sup>Required</sup> <a name="storageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```java
public java.lang.Number getStorageCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```java
public KendraIndexCapacityUnits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesList <a name="KendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesList;

new KendraIndexDocumentMetadataConfigurationUpdatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a>>

---


### KendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference;

new KendraIndexDocumentMetadataConfigurationUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance">putRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance">resetRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelevance` <a name="putRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance"></a>

```java
public void putRelevance(KendraIndexDocumentMetadataConfigurationUpdatesRelevance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch"></a>

```java
public void putSearch(KendraIndexDocumentMetadataConfigurationUpdatesSearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `resetRelevance` <a name="resetRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance"></a>

```java
public void resetRelevance()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch"></a>

```java
public void resetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput">relevanceInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput">searchInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference getRelevance();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference getSearch();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relevanceInput`<sup>Optional</sup> <a name="relevanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance getRelevanceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesSearch getSearchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates">KendraIndexDocumentMetadataConfigurationUpdates</a> OR com.hashicorp.cdktf.IResolvable

---


### KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference;

new KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness">resetFreshness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance">resetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder">resetRankOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap">resetValuesImportanceMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetFreshness` <a name="resetFreshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness"></a>

```java
public void resetFreshness()
```

##### `resetImportance` <a name="resetImportance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance"></a>

```java
public void resetImportance()
```

##### `resetRankOrder` <a name="resetRankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder"></a>

```java
public void resetRankOrder()
```

##### `resetValuesImportanceMap` <a name="resetValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap"></a>

```java
public void resetValuesImportanceMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput">freshnessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput">importanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput">rankOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput">valuesImportanceMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">freshness</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">importance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">rankOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">valuesImportanceMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `freshnessInput`<sup>Optional</sup> <a name="freshnessInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput"></a>

```java
public java.lang.Object getFreshnessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importanceInput`<sup>Optional</sup> <a name="importanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput"></a>

```java
public java.lang.Number getImportanceInput();
```

- *Type:* java.lang.Number

---

##### `rankOrderInput`<sup>Optional</sup> <a name="rankOrderInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput"></a>

```java
public java.lang.String getRankOrderInput();
```

- *Type:* java.lang.String

---

##### `valuesImportanceMapInput`<sup>Optional</sup> <a name="valuesImportanceMapInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getValuesImportanceMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```java
public java.lang.Object getFreshness();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```java
public java.lang.Number getImportance();
```

- *Type:* java.lang.Number

---

##### `rankOrder`<sup>Required</sup> <a name="rankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```java
public java.lang.String getRankOrder();
```

- *Type:* java.lang.String

---

##### `valuesImportanceMap`<sup>Required</sup> <a name="valuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getValuesImportanceMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference;

new KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable">resetDisplayable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable">resetFacetable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable">resetSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable">resetSortable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayable` <a name="resetDisplayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable"></a>

```java
public void resetDisplayable()
```

##### `resetFacetable` <a name="resetFacetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable"></a>

```java
public void resetFacetable()
```

##### `resetSearchable` <a name="resetSearchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable"></a>

```java
public void resetSearchable()
```

##### `resetSortable` <a name="resetSortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable"></a>

```java
public void resetSortable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput">displayableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput">facetableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput">searchableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput">sortableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">displayable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">facetable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">searchable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">sortable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayableInput`<sup>Optional</sup> <a name="displayableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput"></a>

```java
public java.lang.Object getDisplayableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `facetableInput`<sup>Optional</sup> <a name="facetableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput"></a>

```java
public java.lang.Object getFacetableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `searchableInput`<sup>Optional</sup> <a name="searchableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput"></a>

```java
public java.lang.Object getSearchableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortableInput`<sup>Optional</sup> <a name="sortableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput"></a>

```java
public java.lang.Object getSortableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```java
public java.lang.Object getDisplayable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```java
public java.lang.Object getFacetable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```java
public java.lang.Object getSearchable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```java
public java.lang.Object getSortable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```java
public KendraIndexDocumentMetadataConfigurationUpdatesSearch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### KendraIndexIndexStatisticsFaqStatisticsList <a name="KendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsFaqStatisticsList;

new KendraIndexIndexStatisticsFaqStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```java
public KendraIndexIndexStatisticsFaqStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="KendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsFaqStatisticsOutputReference;

new KendraIndexIndexStatisticsFaqStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">indexedQuestionAnswersCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexedQuestionAnswersCount`<sup>Required</sup> <a name="indexedQuestionAnswersCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```java
public java.lang.Number getIndexedQuestionAnswersCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```java
public KendraIndexIndexStatisticsFaqStatistics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a>

---


### KendraIndexIndexStatisticsList <a name="KendraIndexIndexStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsList;

new KendraIndexIndexStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get"></a>

```java
public KendraIndexIndexStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KendraIndexIndexStatisticsOutputReference <a name="KendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsOutputReference;

new KendraIndexIndexStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics">faqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">textDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `faqStatistics`<sup>Required</sup> <a name="faqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```java
public KendraIndexIndexStatisticsFaqStatisticsList getFaqStatistics();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `textDocumentStatistics`<sup>Required</sup> <a name="textDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```java
public KendraIndexIndexStatisticsTextDocumentStatisticsList getTextDocumentStatistics();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```java
public KendraIndexIndexStatistics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a>

---


### KendraIndexIndexStatisticsTextDocumentStatisticsList <a name="KendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsTextDocumentStatisticsList;

new KendraIndexIndexStatisticsTextDocumentStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```java
public KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference;

new KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">indexedTextBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">indexedTextDocumentsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexedTextBytes`<sup>Required</sup> <a name="indexedTextBytes" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```java
public java.lang.Number getIndexedTextBytes();
```

- *Type:* java.lang.Number

---

##### `indexedTextDocumentsCount`<sup>Required</sup> <a name="indexedTextDocumentsCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```java
public java.lang.Number getIndexedTextDocumentsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```java
public KendraIndexIndexStatisticsTextDocumentStatistics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### KendraIndexServerSideEncryptionConfigurationOutputReference <a name="KendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexServerSideEncryptionConfigurationOutputReference;

new KendraIndexServerSideEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public KendraIndexServerSideEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---


### KendraIndexTimeoutsOutputReference <a name="KendraIndexTimeoutsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexTimeoutsOutputReference;

new KendraIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### KendraIndexUserGroupResolutionConfigurationOutputReference <a name="KendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserGroupResolutionConfigurationOutputReference;

new KendraIndexUserGroupResolutionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput">userGroupResolutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">userGroupResolutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userGroupResolutionModeInput`<sup>Optional</sup> <a name="userGroupResolutionModeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput"></a>

```java
public java.lang.String getUserGroupResolutionModeInput();
```

- *Type:* java.lang.String

---

##### `userGroupResolutionMode`<sup>Required</sup> <a name="userGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```java
public java.lang.String getUserGroupResolutionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```java
public KendraIndexUserGroupResolutionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;

new KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">groupAttributeFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">userNameAttributeFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAttributeFieldInput`<sup>Optional</sup> <a name="groupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```java
public java.lang.String getGroupAttributeFieldInput();
```

- *Type:* java.lang.String

---

##### `userNameAttributeFieldInput`<sup>Optional</sup> <a name="userNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```java
public java.lang.String getUserNameAttributeFieldInput();
```

- *Type:* java.lang.String

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```java
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;

new KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex">resetClaimRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField">resetGroupAttributeField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField">resetUserNameAttributeField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClaimRegex` <a name="resetClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex"></a>

```java
public void resetClaimRegex()
```

##### `resetGroupAttributeField` <a name="resetGroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```java
public void resetGroupAttributeField()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn"></a>

```java
public void resetSecretsManagerArn()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserNameAttributeField` <a name="resetUserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```java
public void resetUserNameAttributeField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput">claimRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">groupAttributeFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput">keyLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">userNameAttributeFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claimRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">keyLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimRegexInput`<sup>Optional</sup> <a name="claimRegexInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput"></a>

```java
public java.lang.String getClaimRegexInput();
```

- *Type:* java.lang.String

---

##### `groupAttributeFieldInput`<sup>Optional</sup> <a name="groupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```java
public java.lang.String getGroupAttributeFieldInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `keyLocationInput`<sup>Optional</sup> <a name="keyLocationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput"></a>

```java
public java.lang.String getKeyLocationInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput"></a>

```java
public java.lang.String getSecretsManagerArnInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userNameAttributeFieldInput`<sup>Optional</sup> <a name="userNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```java
public java.lang.String getUserNameAttributeFieldInput();
```

- *Type:* java.lang.String

---

##### `claimRegex`<sup>Required</sup> <a name="claimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```java
public java.lang.String getClaimRegex();
```

- *Type:* java.lang.String

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```java
public java.lang.String getKeyLocation();
```

- *Type:* java.lang.String

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```java
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsOutputReference <a name="KendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_index.KendraIndexUserTokenConfigurationsOutputReference;

new KendraIndexUserTokenConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration">putJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration">putJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration">resetJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration">resetJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonTokenTypeConfiguration` <a name="putJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration"></a>

```java
public void putJsonTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `putJwtTokenTypeConfiguration` <a name="putJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration"></a>

```java
public void putJwtTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `resetJsonTokenTypeConfiguration` <a name="resetJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration"></a>

```java
public void resetJsonTokenTypeConfiguration()
```

##### `resetJwtTokenTypeConfiguration` <a name="resetJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration"></a>

```java
public void resetJwtTokenTypeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput">jsonTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput">jwtTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonTokenTypeConfiguration`<sup>Required</sup> <a name="jsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```java
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference getJsonTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwtTokenTypeConfiguration`<sup>Required</sup> <a name="jwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```java
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference getJwtTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `jsonTokenTypeConfigurationInput`<sup>Optional</sup> <a name="jsonTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput"></a>

```java
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration getJsonTokenTypeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `jwtTokenTypeConfigurationInput`<sup>Optional</sup> <a name="jwtTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput"></a>

```java
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration getJwtTokenTypeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```java
public KendraIndexUserTokenConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---



