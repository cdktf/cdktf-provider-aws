# `sagemakerNotebookInstanceLifecycleConfiguration` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfiguration <a name="SagemakerNotebookInstanceLifecycleConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfiguration;

SagemakerNotebookInstanceLifecycleConfiguration.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .onCreate(java.lang.String)
//  .onStart(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.onCreate">onCreate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.onStart">onStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}.

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.onCreate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}.

---

##### `onStart`<sup>Optional</sup> <a name="onStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.onStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#region SagemakerNotebookInstanceLifecycleConfiguration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate">resetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart">resetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName"></a>

```java
public void resetName()
```

##### `resetOnCreate` <a name="resetOnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate"></a>

```java
public void resetOnCreate()
```

##### `resetOnStart` <a name="resetOnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart"></a>

```java
public void resetOnStart()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfiguration;

SagemakerNotebookInstanceLifecycleConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfiguration;

SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfiguration;

SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfiguration;

SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerNotebookInstanceLifecycleConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput">onCreateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput">onStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate">onCreate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart">onStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onCreateInput`<sup>Optional</sup> <a name="onCreateInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput"></a>

```java
public java.lang.String getOnCreateInput();
```

- *Type:* java.lang.String

---

##### `onStartInput`<sup>Optional</sup> <a name="onStartInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput"></a>

```java
public java.lang.String getOnStartInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onCreate`<sup>Required</sup> <a name="onCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate"></a>

```java
public java.lang.String getOnCreate();
```

- *Type:* java.lang.String

---

##### `onStart`<sup>Required</sup> <a name="onStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart"></a>

```java
public java.lang.String getOnStart();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigurationConfig <a name="SagemakerNotebookInstanceLifecycleConfigurationConfig" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance_lifecycle_configuration.SagemakerNotebookInstanceLifecycleConfigurationConfig;

SagemakerNotebookInstanceLifecycleConfigurationConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .onCreate(java.lang.String)
//  .onStart(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate">onCreate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart">onStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}.

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate"></a>

```java
public java.lang.String getOnCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}.

---

##### `onStart`<sup>Optional</sup> <a name="onStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart"></a>

```java
public java.lang.String getOnStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#region SagemakerNotebookInstanceLifecycleConfiguration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}.

---



