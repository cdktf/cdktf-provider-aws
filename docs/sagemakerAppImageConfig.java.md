# `sagemakerAppImageConfig` Submodule <a name="`sagemakerAppImageConfig` Submodule" id="@cdktf/provider-aws.sagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAppImageConfig <a name="SagemakerAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfig;

SagemakerAppImageConfig.Builder.create(Construct scope, java.lang.String id)
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
    .appImageConfigName(java.lang.String)
//  .codeEditorAppImageConfig(SagemakerAppImageConfigCodeEditorAppImageConfig)
//  .id(java.lang.String)
//  .jupyterLabImageConfig(SagemakerAppImageConfigJupyterLabImageConfig)
//  .kernelGatewayImageConfig(SagemakerAppImageConfigKernelGatewayImageConfig)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | code_editor_app_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.jupyterLabImageConfig">jupyterLabImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | jupyter_lab_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | kernel_gateway_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.appImageConfigName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}.

---

##### `codeEditorAppImageConfig`<sup>Optional</sup> <a name="codeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.codeEditorAppImageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

code_editor_app_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterLabImageConfig`<sup>Optional</sup> <a name="jupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.jupyterLabImageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

jupyter_lab_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config SagemakerAppImageConfig#jupyter_lab_image_config}

---

##### `kernelGatewayImageConfig`<sup>Optional</sup> <a name="kernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.kernelGatewayImageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

kernel_gateway_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#region SagemakerAppImageConfig#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig">putCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig">putJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig">putKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig">resetCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabImageConfig">resetJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig">resetKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeEditorAppImageConfig` <a name="putCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig"></a>

```java
public void putCodeEditorAppImageConfig(SagemakerAppImageConfigCodeEditorAppImageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `putJupyterLabImageConfig` <a name="putJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig"></a>

```java
public void putJupyterLabImageConfig(SagemakerAppImageConfigJupyterLabImageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---

##### `putKernelGatewayImageConfig` <a name="putKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig"></a>

```java
public void putKernelGatewayImageConfig(SagemakerAppImageConfigKernelGatewayImageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `resetCodeEditorAppImageConfig` <a name="resetCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig"></a>

```java
public void resetCodeEditorAppImageConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetId"></a>

```java
public void resetId()
```

##### `resetJupyterLabImageConfig` <a name="resetJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabImageConfig"></a>

```java
public void resetJupyterLabImageConfig()
```

##### `resetKernelGatewayImageConfig` <a name="resetKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig"></a>

```java
public void resetKernelGatewayImageConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfig;

SagemakerAppImageConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfig;

SagemakerAppImageConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfig;

SagemakerAppImageConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfig;

SagemakerAppImageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerAppImageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerAppImageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfig">jupyterLabImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput">codeEditorAppImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfigInput">jupyterLabImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput">kernelGatewayImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `codeEditorAppImageConfig`<sup>Required</sup> <a name="codeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference getCodeEditorAppImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `jupyterLabImageConfig`<sup>Required</sup> <a name="jupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigOutputReference getJupyterLabImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigOutputReference</a>

---

##### `kernelGatewayImageConfig`<sup>Required</sup> <a name="kernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigOutputReference getKernelGatewayImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `codeEditorAppImageConfigInput`<sup>Optional</sup> <a name="codeEditorAppImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfig getCodeEditorAppImageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jupyterLabImageConfigInput`<sup>Optional</sup> <a name="jupyterLabImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfigInput"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfig getJupyterLabImageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---

##### `kernelGatewayImageConfigInput`<sup>Optional</sup> <a name="kernelGatewayImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfig getKernelGatewayImageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfig;

SagemakerAppImageConfigCodeEditorAppImageConfig.builder()
//  .containerConfig(SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig)
//  .fileSystemConfig(SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | container_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig getContainerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;

SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.builder()
//  .containerArguments(java.util.List<java.lang.String>)
//  .containerEntrypoint(java.util.List<java.lang.String>)
//  .containerEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments"></a>

```java
public java.util.List<java.lang.String> getContainerArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}.

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}.

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}.

---

### SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;

SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.builder()
//  .defaultGid(java.lang.Number)
//  .defaultUid(java.lang.Number)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigConfig <a name="SagemakerAppImageConfigConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigConfig;

SagemakerAppImageConfigConfig.builder()
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
    .appImageConfigName(java.lang.String)
//  .codeEditorAppImageConfig(SagemakerAppImageConfigCodeEditorAppImageConfig)
//  .id(java.lang.String)
//  .jupyterLabImageConfig(SagemakerAppImageConfigJupyterLabImageConfig)
//  .kernelGatewayImageConfig(SagemakerAppImageConfigKernelGatewayImageConfig)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | code_editor_app_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabImageConfig">jupyterLabImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | jupyter_lab_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | kernel_gateway_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}.

---

##### `codeEditorAppImageConfig`<sup>Optional</sup> <a name="codeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfig getCodeEditorAppImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

code_editor_app_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterLabImageConfig`<sup>Optional</sup> <a name="jupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabImageConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfig getJupyterLabImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

jupyter_lab_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config SagemakerAppImageConfig#jupyter_lab_image_config}

---

##### `kernelGatewayImageConfig`<sup>Optional</sup> <a name="kernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfig getKernelGatewayImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

kernel_gateway_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#region SagemakerAppImageConfig#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}.

---

### SagemakerAppImageConfigJupyterLabImageConfig <a name="SagemakerAppImageConfigJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfig;

SagemakerAppImageConfigJupyterLabImageConfig.builder()
//  .containerConfig(SagemakerAppImageConfigJupyterLabImageConfigContainerConfig)
//  .fileSystemConfig(SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | container_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.containerConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigContainerConfig getContainerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigJupyterLabImageConfigContainerConfig <a name="SagemakerAppImageConfigJupyterLabImageConfigContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;

SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.builder()
//  .containerArguments(java.util.List<java.lang.String>)
//  .containerEntrypoint(java.util.List<java.lang.String>)
//  .containerEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerArguments"></a>

```java
public java.util.List<java.lang.String> getContainerArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}.

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEntrypoint"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}.

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}.

---

### SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig <a name="SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;

SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.builder()
//  .defaultGid(java.lang.Number)
//  .defaultUid(java.lang.Number)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigKernelGatewayImageConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfig;

SagemakerAppImageConfigKernelGatewayImageConfig.builder()
    .kernelSpec(IResolvable)
    .kernelSpec(java.util.List<SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec>)
//  .fileSystemConfig(SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpec">kernelSpec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>></code> | kernel_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `kernelSpec`<sup>Required</sup> <a name="kernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpec"></a>

```java
public java.lang.Object getKernelSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>>

kernel_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#kernel_spec SagemakerAppImageConfig#kernel_spec}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;

SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.builder()
//  .defaultGid(java.lang.Number)
//  .defaultUid(java.lang.Number)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;

SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.builder()
    .name(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference;

new SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```java
public void resetContainerArguments()
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```java
public void resetContainerEntrypoint()
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```java
public void resetContainerEnvironmentVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```java
public java.util.List<java.lang.String> getContainerArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```java
public java.util.List<java.lang.String> getContainerArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference;

new SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```java
public void resetDefaultGid()
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```java
public void resetDefaultUid()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```java
public java.lang.Number getDefaultGidInput();
```

- *Type:* java.lang.Number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```java
public java.lang.Number getDefaultUidInput();
```

- *Type:* java.lang.Number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference;

new SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig"></a>

```java
public void putContainerConfig(SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig"></a>

```java
public void putFileSystemConfig(SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig"></a>

```java
public void resetContainerConfig()
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetFileSystemConfig"></a>

```java
public void resetFileSystemConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference getContainerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig getContainerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfigInput"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig getFileSystemConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigCodeEditorAppImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference;

new SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```java
public void resetContainerArguments()
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```java
public void resetContainerEntrypoint()
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```java
public void resetContainerEnvironmentVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```java
public java.util.List<java.lang.String> getContainerArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```java
public java.util.List<java.lang.String> getContainerArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```java
public java.util.List<java.lang.String> getContainerEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContainerEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigContainerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference;

new SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```java
public void resetDefaultGid()
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```java
public void resetDefaultUid()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```java
public java.lang.Number getDefaultGidInput();
```

- *Type:* java.lang.Number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```java
public java.lang.Number getDefaultUidInput();
```

- *Type:* java.lang.Number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigJupyterLabImageConfigOutputReference;

new SagemakerAppImageConfigJupyterLabImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig"></a>

```java
public void putContainerConfig(SagemakerAppImageConfigJupyterLabImageConfigContainerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig"></a>

```java
public void putFileSystemConfig(SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetContainerConfig"></a>

```java
public void resetContainerConfig()
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetFileSystemConfig"></a>

```java
public void resetFileSystemConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference getContainerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfigInput"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigContainerConfig getContainerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfigInput"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig getFileSystemConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigJupyterLabImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference;

new SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```java
public void resetDefaultGid()
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```java
public void resetDefaultUid()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```java
public java.lang.Number getDefaultGidInput();
```

- *Type:* java.lang.Number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```java
public java.lang.Number getDefaultUidInput();
```

- *Type:* java.lang.Number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```java
public java.lang.Number getDefaultGid();
```

- *Type:* java.lang.Number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```java
public java.lang.Number getDefaultUid();
```

- *Type:* java.lang.Number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList;

new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>>

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference;

new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_app_image_config.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference;

new SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec">putKernelSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig"></a>

```java
public void putFileSystemConfig(SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `putKernelSpec` <a name="putKernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec"></a>

```java
public void putKernelSpec(IResolvable OR java.util.List<SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>>

---

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig"></a>

```java
public void resetFileSystemConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpec">kernelSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecInput">kernelSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `kernelSpec`<sup>Required</sup> <a name="kernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpec"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList getKernelSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig getFileSystemConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `kernelSpecInput`<sup>Optional</sup> <a name="kernelSpecInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecInput"></a>

```java
public java.lang.Object getKernelSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```java
public SagemakerAppImageConfigKernelGatewayImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---



