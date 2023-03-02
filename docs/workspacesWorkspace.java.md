# `workspacesWorkspace` Submodule <a name="`workspacesWorkspace` Submodule" id="@cdktf/provider-aws.workspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspace <a name="WorkspacesWorkspace" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspace;

WorkspacesWorkspace.Builder.create(Construct scope, java.lang.String id)
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
    .bundleId(java.lang.String)
    .directoryId(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .rootVolumeEncryptionEnabled(java.lang.Boolean)
//  .rootVolumeEncryptionEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkspacesWorkspaceTimeouts)
//  .userVolumeEncryptionEnabled(java.lang.Boolean)
//  .userVolumeEncryptionEnabled(IResolvable)
//  .volumeEncryptionKey(java.lang.String)
//  .workspaceProperties(WorkspacesWorkspaceWorkspaceProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.rootVolumeEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `userVolumeEncryptionEnabled`<sup>Optional</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userVolumeEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `volumeEncryptionKey`<sup>Optional</sup> <a name="volumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.volumeEncryptionKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `workspaceProperties`<sup>Optional</sup> <a name="workspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.workspaceProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties">putWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled">resetRootVolumeEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled">resetUserVolumeEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey">resetVolumeEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties">resetWorkspaceProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts"></a>

```java
public void putTimeouts(WorkspacesWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

---

##### `putWorkspaceProperties` <a name="putWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties"></a>

```java
public void putWorkspaceProperties(WorkspacesWorkspaceWorkspaceProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetRootVolumeEncryptionEnabled` <a name="resetRootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled"></a>

```java
public void resetRootVolumeEncryptionEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserVolumeEncryptionEnabled` <a name="resetUserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled"></a>

```java
public void resetUserVolumeEncryptionEnabled()
```

##### `resetVolumeEncryptionKey` <a name="resetVolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey"></a>

```java
public void resetVolumeEncryptionKey()
```

##### `resetWorkspaceProperties` <a name="resetWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties"></a>

```java
public void resetWorkspaceProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspace;

WorkspacesWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspace;

WorkspacesWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspace;

WorkspacesWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput">rootVolumeEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput">userVolumeEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput">volumeEncryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput">workspacePropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts"></a>

```java
public WorkspacesWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a>

---

##### `workspaceProperties`<sup>Required</sup> <a name="workspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties"></a>

```java
public WorkspacesWorkspaceWorkspacePropertiesOutputReference getWorkspaceProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a>

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rootVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="rootVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput"></a>

```java
public java.lang.Object getRootVolumeEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="userVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput"></a>

```java
public java.lang.Object getUserVolumeEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeEncryptionKeyInput`<sup>Optional</sup> <a name="volumeEncryptionKeyInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput"></a>

```java
public java.lang.String getVolumeEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `workspacePropertiesInput`<sup>Optional</sup> <a name="workspacePropertiesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput"></a>

```java
public WorkspacesWorkspaceWorkspaceProperties getWorkspacePropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rootVolumeEncryptionEnabled`<sup>Required</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```java
public java.lang.Object getRootVolumeEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `userVolumeEncryptionEnabled`<sup>Required</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```java
public java.lang.Object getUserVolumeEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeEncryptionKey`<sup>Required</sup> <a name="volumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey"></a>

```java
public java.lang.String getVolumeEncryptionKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceConfig <a name="WorkspacesWorkspaceConfig" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspaceConfig;

WorkspacesWorkspaceConfig.builder()
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
    .bundleId(java.lang.String)
    .directoryId(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .rootVolumeEncryptionEnabled(java.lang.Boolean)
//  .rootVolumeEncryptionEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkspacesWorkspaceTimeouts)
//  .userVolumeEncryptionEnabled(java.lang.Boolean)
//  .userVolumeEncryptionEnabled(IResolvable)
//  .volumeEncryptionKey(java.lang.String)
//  .workspaceProperties(WorkspacesWorkspaceWorkspaceProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled"></a>

```java
public java.lang.Object getRootVolumeEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts"></a>

```java
public WorkspacesWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `userVolumeEncryptionEnabled`<sup>Optional</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled"></a>

```java
public java.lang.Object getUserVolumeEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `volumeEncryptionKey`<sup>Optional</sup> <a name="volumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey"></a>

```java
public java.lang.String getVolumeEncryptionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `workspaceProperties`<sup>Optional</sup> <a name="workspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties"></a>

```java
public WorkspacesWorkspaceWorkspaceProperties getWorkspaceProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

### WorkspacesWorkspaceTimeouts <a name="WorkspacesWorkspaceTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspaceTimeouts;

WorkspacesWorkspaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}.

---

### WorkspacesWorkspaceWorkspaceProperties <a name="WorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspaceWorkspaceProperties;

WorkspacesWorkspaceWorkspaceProperties.builder()
//  .computeTypeName(java.lang.String)
//  .rootVolumeSizeGib(java.lang.Number)
//  .runningMode(java.lang.String)
//  .runningModeAutoStopTimeoutInMinutes(java.lang.Number)
//  .userVolumeSizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName">computeTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib">rootVolumeSizeGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode">runningMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes">runningModeAutoStopTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib">userVolumeSizeGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}. |

---

##### `computeTypeName`<sup>Optional</sup> <a name="computeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName"></a>

```java
public java.lang.String getComputeTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}.

---

##### `rootVolumeSizeGib`<sup>Optional</sup> <a name="rootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib"></a>

```java
public java.lang.Number getRootVolumeSizeGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.

---

##### `runningMode`<sup>Optional</sup> <a name="runningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode"></a>

```java
public java.lang.String getRunningMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}.

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Optional</sup> <a name="runningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes"></a>

```java
public java.lang.Number getRunningModeAutoStopTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.

---

##### `userVolumeSizeGib`<sup>Optional</sup> <a name="userVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib"></a>

```java
public java.lang.Number getUserVolumeSizeGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceTimeoutsOutputReference <a name="WorkspacesWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspaceTimeoutsOutputReference;

new WorkspacesWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### WorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="WorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspaces_workspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference;

new WorkspacesWorkspaceWorkspacePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName">resetComputeTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib">resetRootVolumeSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode">resetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes">resetRunningModeAutoStopTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib">resetUserVolumeSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeTypeName` <a name="resetComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName"></a>

```java
public void resetComputeTypeName()
```

##### `resetRootVolumeSizeGib` <a name="resetRootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib"></a>

```java
public void resetRootVolumeSizeGib()
```

##### `resetRunningMode` <a name="resetRunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode"></a>

```java
public void resetRunningMode()
```

##### `resetRunningModeAutoStopTimeoutInMinutes` <a name="resetRunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes"></a>

```java
public void resetRunningModeAutoStopTimeoutInMinutes()
```

##### `resetUserVolumeSizeGib` <a name="resetUserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib"></a>

```java
public void resetUserVolumeSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput">computeTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput">rootVolumeSizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput">runningModeAutoStopTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput">runningModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput">userVolumeSizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">computeTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">rootVolumeSizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">runningMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">runningModeAutoStopTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">userVolumeSizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeTypeNameInput`<sup>Optional</sup> <a name="computeTypeNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput"></a>

```java
public java.lang.String getComputeTypeNameInput();
```

- *Type:* java.lang.String

---

##### `rootVolumeSizeGibInput`<sup>Optional</sup> <a name="rootVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput"></a>

```java
public java.lang.Number getRootVolumeSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `runningModeAutoStopTimeoutInMinutesInput`<sup>Optional</sup> <a name="runningModeAutoStopTimeoutInMinutesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput"></a>

```java
public java.lang.Number getRunningModeAutoStopTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `runningModeInput`<sup>Optional</sup> <a name="runningModeInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput"></a>

```java
public java.lang.String getRunningModeInput();
```

- *Type:* java.lang.String

---

##### `userVolumeSizeGibInput`<sup>Optional</sup> <a name="userVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput"></a>

```java
public java.lang.Number getUserVolumeSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `computeTypeName`<sup>Required</sup> <a name="computeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```java
public java.lang.String getComputeTypeName();
```

- *Type:* java.lang.String

---

##### `rootVolumeSizeGib`<sup>Required</sup> <a name="rootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```java
public java.lang.Number getRootVolumeSizeGib();
```

- *Type:* java.lang.Number

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```java
public java.lang.String getRunningMode();
```

- *Type:* java.lang.String

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="runningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```java
public java.lang.Number getRunningModeAutoStopTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `userVolumeSizeGib`<sup>Required</sup> <a name="userVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```java
public java.lang.Number getUserVolumeSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```java
public WorkspacesWorkspaceWorkspaceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---



