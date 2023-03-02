# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktf/provider-aws.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe aws_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.Builder.create(Construct scope, java.lang.String id)
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
    .component(IResolvable)
    .component(java.util.List<ImagebuilderImageRecipeComponent>)
    .name(java.lang.String)
    .parentImage(java.lang.String)
    .version(java.lang.String)
//  .blockDeviceMapping(IResolvable)
//  .blockDeviceMapping(java.util.List<ImagebuilderImageRecipeBlockDeviceMapping>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .systemsManagerAgent(ImagebuilderImageRecipeSystemsManagerAgent)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userDataBase64(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.component">component</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>></code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage">parentImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMapping">blockDeviceMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>></code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | systems_manager_agent block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.component"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>>

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component ImagebuilderImageRecipe#component}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}.

---

##### `blockDeviceMapping`<sup>Optional</sup> <a name="blockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>>

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systemsManagerAgent`<sup>Optional</sup> <a name="systemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.systemsManagerAgent"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

systems_manager_agent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.userDataBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping">putBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent">putComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent">putSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMapping">resetBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetSystemsManagerAgent">resetSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBlockDeviceMapping` <a name="putBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping"></a>

```java
public void putBlockDeviceMapping(IResolvable OR java.util.List<ImagebuilderImageRecipeBlockDeviceMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>>

---

##### `putComponent` <a name="putComponent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent"></a>

```java
public void putComponent(IResolvable OR java.util.List<ImagebuilderImageRecipeComponent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>>

---

##### `putSystemsManagerAgent` <a name="putSystemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent"></a>

```java
public void putSystemsManagerAgent(ImagebuilderImageRecipeSystemsManagerAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

---

##### `resetBlockDeviceMapping` <a name="resetBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMapping"></a>

```java
public void resetBlockDeviceMapping()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetId"></a>

```java
public void resetId()
```

##### `resetSystemsManagerAgent` <a name="resetSystemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetSystemsManagerAgent"></a>

```java
public void resetSystemsManagerAgent()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetUserDataBase64"></a>

```java
public void resetUserDataBase64()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMapping">blockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList">ImagebuilderImageRecipeBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList">ImagebuilderImageRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dateCreated">dateCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference">ImagebuilderImageRecipeSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingInput">blockDeviceMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentInput">componentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">parentImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgentInput">systemsManagerAgentInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64Input">userDataBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">parentImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `blockDeviceMapping`<sup>Required</sup> <a name="blockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMapping"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingList getBlockDeviceMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList">ImagebuilderImageRecipeBlockDeviceMappingList</a>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.component"></a>

```java
public ImagebuilderImageRecipeComponentList getComponent();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList">ImagebuilderImageRecipeComponentList</a>

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dateCreated"></a>

```java
public java.lang.String getDateCreated();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `systemsManagerAgent`<sup>Required</sup> <a name="systemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgent"></a>

```java
public ImagebuilderImageRecipeSystemsManagerAgentOutputReference getSystemsManagerAgent();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference">ImagebuilderImageRecipeSystemsManagerAgentOutputReference</a>

---

##### `blockDeviceMappingInput`<sup>Optional</sup> <a name="blockDeviceMappingInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingInput"></a>

```java
public java.lang.Object getBlockDeviceMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>>

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentInput"></a>

```java
public java.lang.Object getComponentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentImageInput`<sup>Optional</sup> <a name="parentImageInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```java
public java.lang.String getParentImageInput();
```

- *Type:* java.lang.String

---

##### `systemsManagerAgentInput`<sup>Optional</sup> <a name="systemsManagerAgentInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgentInput"></a>

```java
public ImagebuilderImageRecipeSystemsManagerAgent getSystemsManagerAgentInput();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64Input"></a>

```java
public java.lang.String getUserDataBase64Input();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```java
public java.lang.String getParentImage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeBlockDeviceMapping <a name="ImagebuilderImageRecipeBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMapping;

ImagebuilderImageRecipeBlockDeviceMapping.builder()
//  .deviceName(java.lang.String)
//  .ebs(ImagebuilderImageRecipeBlockDeviceMappingEbs)
//  .noDevice(java.lang.Boolean)
//  .noDevice(IResolvable)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.ebs"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingEbs getEbs();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}.

---

### ImagebuilderImageRecipeBlockDeviceMappingEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingEbs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingEbs;

ImagebuilderImageRecipeBlockDeviceMappingEbs.builder()
//  .deleteOnTermination(java.lang.String)
//  .encrypted(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.encrypted">encrypted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.deleteOnTermination"></a>

```java
public java.lang.String getDeleteOnTermination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.encrypted"></a>

```java
public java.lang.String getEncrypted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}.

---

### ImagebuilderImageRecipeComponent <a name="ImagebuilderImageRecipeComponent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponent;

ImagebuilderImageRecipeComponent.builder()
    .componentArn(java.lang.String)
//  .parameter(IResolvable)
//  .parameter(java.util.List<ImagebuilderImageRecipeComponentParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.componentArn">componentArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>></code> | parameter block. |

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.componentArn"></a>

```java
public java.lang.String getComponentArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parameter ImagebuilderImageRecipe#parameter}

---

### ImagebuilderImageRecipeComponentParameter <a name="ImagebuilderImageRecipeComponentParameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentParameter;

ImagebuilderImageRecipeComponentParameter.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}.

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeConfig;

ImagebuilderImageRecipeConfig.builder()
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
    .component(IResolvable)
    .component(java.util.List<ImagebuilderImageRecipeComponent>)
    .name(java.lang.String)
    .parentImage(java.lang.String)
    .version(java.lang.String)
//  .blockDeviceMapping(IResolvable)
//  .blockDeviceMapping(java.util.List<ImagebuilderImageRecipeBlockDeviceMapping>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .systemsManagerAgent(ImagebuilderImageRecipeSystemsManagerAgent)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userDataBase64(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.component">component</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>></code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">parentImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMapping">blockDeviceMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>></code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | systems_manager_agent block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.component"></a>

```java
public java.lang.Object getComponent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>>

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component ImagebuilderImageRecipe#component}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```java
public java.lang.String getParentImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}.

---

##### `blockDeviceMapping`<sup>Optional</sup> <a name="blockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMapping"></a>

```java
public java.lang.Object getBlockDeviceMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>>

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systemsManagerAgent`<sup>Optional</sup> <a name="systemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.systemsManagerAgent"></a>

```java
public ImagebuilderImageRecipeSystemsManagerAgent getSystemsManagerAgent();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

systems_manager_agent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}.

---

### ImagebuilderImageRecipeSystemsManagerAgent <a name="ImagebuilderImageRecipeSystemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeSystemsManagerAgent;

ImagebuilderImageRecipeSystemsManagerAgent.builder()
    .uninstallAfterBuild(java.lang.Boolean)
    .uninstallAfterBuild(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}. |

---

##### `uninstallAfterBuild`<sup>Required</sup> <a name="uninstallAfterBuild" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.property.uninstallAfterBuild"></a>

```java
public java.lang.Object getUninstallAfterBuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference;

new ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.String getDeleteOnTerminationInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.String getEncryptedInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.String getDeleteOnTermination();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```java
public java.lang.String getEncrypted();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingEbs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingList <a name="ImagebuilderImageRecipeBlockDeviceMappingList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingList;

new ImagebuilderImageRecipeBlockDeviceMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>>

---


### ImagebuilderImageRecipeBlockDeviceMappingOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference;

new ImagebuilderImageRecipeBlockDeviceMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs"></a>

```java
public void putEbs(ImagebuilderImageRecipeBlockDeviceMappingEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebsInput"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingEbs getEbsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDeviceInput"></a>

```java
public java.lang.Object getNoDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a> OR com.hashicorp.cdktf.IResolvable

---


### ImagebuilderImageRecipeComponentList <a name="ImagebuilderImageRecipeComponentList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentList;

new ImagebuilderImageRecipeComponentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get"></a>

```java
public ImagebuilderImageRecipeComponentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>>

---


### ImagebuilderImageRecipeComponentOutputReference <a name="ImagebuilderImageRecipeComponentOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentOutputReference;

new ImagebuilderImageRecipeComponentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<ImagebuilderImageRecipeComponentParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>>

---

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resetParameter"></a>

```java
public void resetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList">ImagebuilderImageRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArnInput">componentArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArn">componentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameter"></a>

```java
public ImagebuilderImageRecipeComponentParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList">ImagebuilderImageRecipeComponentParameterList</a>

---

##### `componentArnInput`<sup>Optional</sup> <a name="componentArnInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArnInput"></a>

```java
public java.lang.String getComponentArnInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>>

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArn"></a>

```java
public java.lang.String getComponentArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a> OR com.hashicorp.cdktf.IResolvable

---


### ImagebuilderImageRecipeComponentParameterList <a name="ImagebuilderImageRecipeComponentParameterList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentParameterList;

new ImagebuilderImageRecipeComponentParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get"></a>

```java
public ImagebuilderImageRecipeComponentParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>>

---


### ImagebuilderImageRecipeComponentParameterOutputReference <a name="ImagebuilderImageRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentParameterOutputReference;

new ImagebuilderImageRecipeComponentParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a> OR com.hashicorp.cdktf.IResolvable

---


### ImagebuilderImageRecipeSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeSystemsManagerAgentOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_image_recipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference;

new ImagebuilderImageRecipeSystemsManagerAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">uninstallAfterBuildInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uninstallAfterBuildInput`<sup>Optional</sup> <a name="uninstallAfterBuildInput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```java
public java.lang.Object getUninstallAfterBuildInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uninstallAfterBuild`<sup>Required</sup> <a name="uninstallAfterBuild" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```java
public java.lang.Object getUninstallAfterBuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.internalValue"></a>

```java
public ImagebuilderImageRecipeSystemsManagerAgent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

---



