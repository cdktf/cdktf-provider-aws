# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktf/provider-aws.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktf/provider-aws.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector aws_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnector;

TransferConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessRole(java.lang.String)
    .url(java.lang.String)
//  .as2Config(TransferConnectorAs2Config)
//  .id(java.lang.String)
//  .loggingRole(java.lang.String)
//  .sftpConfig(TransferConnectorSftpConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.as2Config">as2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | sftp_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.accessRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.as2Config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.loggingRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.sftpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

sftp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config">putAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig">putSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config">resetAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig">resetSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAs2Config` <a name="putAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config"></a>

```java
public void putAs2Config(TransferConnectorAs2Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `putSftpConfig` <a name="putSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig"></a>

```java
public void putSftpConfig(TransferConnectorSftpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `resetAs2Config` <a name="resetAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config"></a>

```java
public void resetAs2Config()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole"></a>

```java
public void resetLoggingRole()
```

##### `resetSftpConfig` <a name="resetSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig"></a>

```java
public void resetSftpConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnector;

TransferConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnector;

TransferConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnector;

TransferConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnector;

TransferConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config">as2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput">accessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput">as2ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput">loggingRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput">sftpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `as2Config`<sup>Required</sup> <a name="as2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config"></a>

```java
public TransferConnectorAs2ConfigOutputReference getAs2Config();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `sftpConfig`<sup>Required</sup> <a name="sftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig"></a>

```java
public TransferConnectorSftpConfigOutputReference getSftpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput"></a>

```java
public java.lang.String getAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `as2ConfigInput`<sup>Optional</sup> <a name="as2ConfigInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```java
public TransferConnectorAs2Config getAs2ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```java
public java.lang.String getLoggingRoleInput();
```

- *Type:* java.lang.String

---

##### `sftpConfigInput`<sup>Optional</sup> <a name="sftpConfigInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```java
public TransferConnectorSftpConfig getSftpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnectorAs2Config;

TransferConnectorAs2Config.builder()
    .compression(java.lang.String)
    .encryptionAlgorithm(java.lang.String)
    .localProfileId(java.lang.String)
    .mdnResponse(java.lang.String)
    .partnerProfileId(java.lang.String)
    .signingAlgorithm(java.lang.String)
//  .mdnSigningAlgorithm(java.lang.String)
//  .messageSubject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#compression TransferConnector#compression}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdnResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject">messageSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}. |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#compression TransferConnector#compression}.

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}.

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}.

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```java
public java.lang.String getMdnResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}.

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}.

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}.

---

##### `mdnSigningAlgorithm`<sup>Optional</sup> <a name="mdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```java
public java.lang.String getMdnSigningAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}.

---

##### `messageSubject`<sup>Optional</sup> <a name="messageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```java
public java.lang.String getMessageSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}.

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnectorConfig;

TransferConnectorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessRole(java.lang.String)
    .url(java.lang.String)
//  .as2Config(TransferConnectorAs2Config)
//  .id(java.lang.String)
//  .loggingRole(java.lang.String)
//  .sftpConfig(TransferConnectorSftpConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config">as2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | sftp_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```java
public TransferConnectorAs2Config getAs2Config();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```java
public TransferConnectorSftpConfig getSftpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

sftp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnectorSftpConfig;

TransferConnectorSftpConfig.builder()
//  .trustedHostKeys(java.util.List<java.lang.String>)
//  .userSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trustedHostKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId">userSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}. |

---

##### `trustedHostKeys`<sup>Optional</sup> <a name="trustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}.

---

##### `userSecretId`<sup>Optional</sup> <a name="userSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```java
public java.lang.String getUserSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnectorAs2ConfigOutputReference;

new TransferConnectorAs2ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">resetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">resetMessageSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMdnSigningAlgorithm` <a name="resetMdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```java
public void resetMdnSigningAlgorithm()
```

##### `resetMessageSubject` <a name="resetMessageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```java
public void resetMessageSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">localProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdnResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdnSigningAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">messageSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdnResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">messageSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```java
public java.lang.String getLocalProfileIdInput();
```

- *Type:* java.lang.String

---

##### `mdnResponseInput`<sup>Optional</sup> <a name="mdnResponseInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```java
public java.lang.String getMdnResponseInput();
```

- *Type:* java.lang.String

---

##### `mdnSigningAlgorithmInput`<sup>Optional</sup> <a name="mdnSigningAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```java
public java.lang.String getMdnSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `messageSubjectInput`<sup>Optional</sup> <a name="messageSubjectInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```java
public java.lang.String getMessageSubjectInput();
```

- *Type:* java.lang.String

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```java
public java.lang.String getPartnerProfileIdInput();
```

- *Type:* java.lang.String

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```java
public java.lang.String getSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```java
public java.lang.String getMdnResponse();
```

- *Type:* java.lang.String

---

##### `mdnSigningAlgorithm`<sup>Required</sup> <a name="mdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```java
public java.lang.String getMdnSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `messageSubject`<sup>Required</sup> <a name="messageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```java
public java.lang.String getMessageSubject();
```

- *Type:* java.lang.String

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```java
public TransferConnectorAs2Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_connector.TransferConnectorSftpConfigOutputReference;

new TransferConnectorSftpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">resetTrustedHostKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">resetUserSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedHostKeys` <a name="resetTrustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```java
public void resetTrustedHostKeys()
```

##### `resetUserSecretId` <a name="resetUserSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```java
public void resetUserSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trustedHostKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">userSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trustedHostKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">userSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustedHostKeysInput`<sup>Optional</sup> <a name="trustedHostKeysInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userSecretIdInput`<sup>Optional</sup> <a name="userSecretIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```java
public java.lang.String getUserSecretIdInput();
```

- *Type:* java.lang.String

---

##### `trustedHostKeys`<sup>Required</sup> <a name="trustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userSecretId`<sup>Required</sup> <a name="userSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```java
public java.lang.String getUserSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```java
public TransferConnectorSftpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---



