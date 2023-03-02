# `dataAwsWorkspacesWorkspace` Submodule <a name="`dataAwsWorkspacesWorkspace` Submodule" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWorkspacesWorkspace <a name="DataAwsWorkspacesWorkspace" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspace;

DataAwsWorkspacesWorkspace.Builder.create(Construct scope, java.lang.String id)
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
//  .directoryId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .userName(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName"></a>

```java
public void resetUserName()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspace;

DataAwsWorkspacesWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspace;

DataAwsWorkspacesWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspace;

DataAwsWorkspacesWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `rootVolumeEncryptionEnabled`<sup>Required</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```java
public IResolvable getRootVolumeEncryptionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `userVolumeEncryptionEnabled`<sup>Required</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```java
public IResolvable getUserVolumeEncryptionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `volumeEncryptionKey`<sup>Required</sup> <a name="volumeEncryptionKey" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey"></a>

```java
public java.lang.String getVolumeEncryptionKey();
```

- *Type:* java.lang.String

---

##### `workspaceProperties`<sup>Required</sup> <a name="workspaceProperties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties"></a>

```java
public DataAwsWorkspacesWorkspaceWorkspacePropertiesList getWorkspaceProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWorkspacesWorkspaceConfig <a name="DataAwsWorkspacesWorkspaceConfig" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspaceConfig;

DataAwsWorkspacesWorkspaceConfig.builder()
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
//  .directoryId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .userName(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

### DataAwsWorkspacesWorkspaceWorkspaceProperties <a name="DataAwsWorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspaceWorkspaceProperties;

DataAwsWorkspacesWorkspaceWorkspaceProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWorkspacesWorkspaceWorkspacePropertiesList <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesList" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList;

new DataAwsWorkspacesWorkspaceWorkspacePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get"></a>

```java
public DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_workspaces_workspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference;

new DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">computeTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">rootVolumeSizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">runningMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">runningModeAutoStopTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">userVolumeSizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeTypeName`<sup>Required</sup> <a name="computeTypeName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```java
public java.lang.String getComputeTypeName();
```

- *Type:* java.lang.String

---

##### `rootVolumeSizeGib`<sup>Required</sup> <a name="rootVolumeSizeGib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```java
public java.lang.Number getRootVolumeSizeGib();
```

- *Type:* java.lang.Number

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```java
public java.lang.String getRunningMode();
```

- *Type:* java.lang.String

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="runningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```java
public java.lang.Number getRunningModeAutoStopTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `userVolumeSizeGib`<sup>Required</sup> <a name="userVolumeSizeGib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```java
public java.lang.Number getUserVolumeSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsWorkspacesWorkspaceWorkspaceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a>

---



