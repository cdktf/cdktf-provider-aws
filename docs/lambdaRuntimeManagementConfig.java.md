# `lambdaRuntimeManagementConfig` Submodule <a name="`lambdaRuntimeManagementConfig` Submodule" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeManagementConfig <a name="LambdaRuntimeManagementConfig" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfig;

LambdaRuntimeManagementConfig.Builder.create(Construct scope, java.lang.String id)
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
    .functionName(java.lang.String)
//  .qualifier(java.lang.String)
//  .runtimeVersionArn(java.lang.String)
//  .updateRuntimeOn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.runtimeVersionArn">runtimeVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.updateRuntimeOn">updateRuntimeOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}.

---

##### `runtimeVersionArn`<sup>Optional</sup> <a name="runtimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.runtimeVersionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}.

---

##### `updateRuntimeOn`<sup>Optional</sup> <a name="updateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.updateRuntimeOn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetRuntimeVersionArn">resetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetUpdateRuntimeOn">resetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetQualifier"></a>

```java
public void resetQualifier()
```

##### `resetRuntimeVersionArn` <a name="resetRuntimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetRuntimeVersionArn"></a>

```java
public void resetRuntimeVersionArn()
```

##### `resetUpdateRuntimeOn` <a name="resetUpdateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetUpdateRuntimeOn"></a>

```java
public void resetUpdateRuntimeOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfig;

LambdaRuntimeManagementConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfig;

LambdaRuntimeManagementConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfig;

LambdaRuntimeManagementConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfig;

LambdaRuntimeManagementConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaRuntimeManagementConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaRuntimeManagementConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaRuntimeManagementConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeManagementConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArnInput">runtimeVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOnInput">updateRuntimeOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionArnInput`<sup>Optional</sup> <a name="runtimeVersionArnInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArnInput"></a>

```java
public java.lang.String getRuntimeVersionArnInput();
```

- *Type:* java.lang.String

---

##### `updateRuntimeOnInput`<sup>Optional</sup> <a name="updateRuntimeOnInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOnInput"></a>

```java
public java.lang.String getUpdateRuntimeOnInput();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArn"></a>

```java
public java.lang.String getRuntimeVersionArn();
```

- *Type:* java.lang.String

---

##### `updateRuntimeOn`<sup>Required</sup> <a name="updateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOn"></a>

```java
public java.lang.String getUpdateRuntimeOn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeManagementConfigConfig <a name="LambdaRuntimeManagementConfigConfig" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_runtime_management_config.LambdaRuntimeManagementConfigConfig;

LambdaRuntimeManagementConfigConfig.builder()
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
    .functionName(java.lang.String)
//  .qualifier(java.lang.String)
//  .runtimeVersionArn(java.lang.String)
//  .updateRuntimeOn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}.

---

##### `runtimeVersionArn`<sup>Optional</sup> <a name="runtimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.runtimeVersionArn"></a>

```java
public java.lang.String getRuntimeVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}.

---

##### `updateRuntimeOn`<sup>Optional</sup> <a name="updateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.updateRuntimeOn"></a>

```java
public java.lang.String getUpdateRuntimeOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}.

---



