# `sagemakerDeviceFleet` Submodule <a name="`sagemakerDeviceFleet` Submodule" id="@cdktf/provider-aws.sagemakerDeviceFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDeviceFleet <a name="SagemakerDeviceFleet" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet aws_sagemaker_device_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleet;

SagemakerDeviceFleet.Builder.create(Construct scope, java.lang.String id)
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
    .deviceFleetName(java.lang.String)
    .outputConfig(SagemakerDeviceFleetOutputConfig)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .enableIotRoleAlias(java.lang.Boolean)
//  .enableIotRoleAlias(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.deviceFleetName">deviceFleetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.enableIotRoleAlias">enableIotRoleAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deviceFleetName`<sup>Required</sup> <a name="deviceFleetName" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.deviceFleetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}.

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.outputConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}.

---

##### `enableIotRoleAlias`<sup>Optional</sup> <a name="enableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.enableIotRoleAlias"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias">resetEnableIotRoleAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig"></a>

```java
public void putOutputConfig(SagemakerDeviceFleetOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableIotRoleAlias` <a name="resetEnableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias"></a>

```java
public void resetEnableIotRoleAlias()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleet;

SagemakerDeviceFleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleet;

SagemakerDeviceFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleet;

SagemakerDeviceFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias">iotRoleAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput">deviceFleetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput">enableIotRoleAliasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName">deviceFleetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias">enableIotRoleAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `iotRoleAlias`<sup>Required</sup> <a name="iotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias"></a>

```java
public java.lang.String getIotRoleAlias();
```

- *Type:* java.lang.String

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig"></a>

```java
public SagemakerDeviceFleetOutputConfigOutputReference getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceFleetNameInput`<sup>Optional</sup> <a name="deviceFleetNameInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput"></a>

```java
public java.lang.String getDeviceFleetNameInput();
```

- *Type:* java.lang.String

---

##### `enableIotRoleAliasInput`<sup>Optional</sup> <a name="enableIotRoleAliasInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput"></a>

```java
public java.lang.Object getEnableIotRoleAliasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput"></a>

```java
public SagemakerDeviceFleetOutputConfig getOutputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceFleetName`<sup>Required</sup> <a name="deviceFleetName" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName"></a>

```java
public java.lang.String getDeviceFleetName();
```

- *Type:* java.lang.String

---

##### `enableIotRoleAlias`<sup>Required</sup> <a name="enableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias"></a>

```java
public java.lang.Object getEnableIotRoleAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDeviceFleetConfig <a name="SagemakerDeviceFleetConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleetConfig;

SagemakerDeviceFleetConfig.builder()
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
    .deviceFleetName(java.lang.String)
    .outputConfig(SagemakerDeviceFleetOutputConfig)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .enableIotRoleAlias(java.lang.Boolean)
//  .enableIotRoleAlias(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName">deviceFleetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias">enableIotRoleAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deviceFleetName`<sup>Required</sup> <a name="deviceFleetName" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName"></a>

```java
public java.lang.String getDeviceFleetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}.

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig"></a>

```java
public SagemakerDeviceFleetOutputConfig getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}.

---

##### `enableIotRoleAlias`<sup>Optional</sup> <a name="enableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias"></a>

```java
public java.lang.Object getEnableIotRoleAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}.

---

### SagemakerDeviceFleetOutputConfig <a name="SagemakerDeviceFleetOutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleetOutputConfig;

SagemakerDeviceFleetOutputConfig.builder()
    .s3OutputLocation(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation">s3OutputLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}. |

---

##### `s3OutputLocation`<sup>Required</sup> <a name="s3OutputLocation" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation"></a>

```java
public java.lang.String getS3OutputLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDeviceFleetOutputConfigOutputReference <a name="SagemakerDeviceFleetOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_device_fleet.SagemakerDeviceFleetOutputConfigOutputReference;

new SagemakerDeviceFleetOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput">s3OutputLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation">s3OutputLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputLocationInput`<sup>Optional</sup> <a name="s3OutputLocationInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput"></a>

```java
public java.lang.String getS3OutputLocationInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputLocation`<sup>Required</sup> <a name="s3OutputLocation" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation"></a>

```java
public java.lang.String getS3OutputLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue"></a>

```java
public SagemakerDeviceFleetOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---



