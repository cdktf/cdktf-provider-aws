# `secretsmanagerSecretRotation` Submodule <a name="`secretsmanagerSecretRotation` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretRotation <a name="SecretsmanagerSecretRotation" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotation;

SecretsmanagerSecretRotation.Builder.create(Construct scope, java.lang.String id)
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
    .rotationRules(SecretsmanagerSecretRotationRotationRules)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .rotateImmediately(java.lang.Boolean)
//  .rotateImmediately(IResolvable)
//  .rotationLambdaArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotateImmediately">rotateImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotationRules"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}

---

##### `rotateImmediately`<sup>Optional</sup> <a name="rotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotateImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}.

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.rotationLambdaArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules">putRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately">resetRotateImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn">resetRotationLambdaArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationRules` <a name="putRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules"></a>

```java
public void putRotationRules(SecretsmanagerSecretRotationRotationRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRotateImmediately` <a name="resetRotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately"></a>

```java
public void resetRotateImmediately()
```

##### `resetRotationLambdaArn` <a name="resetRotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn"></a>

```java
public void resetRotationLambdaArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotation;

SecretsmanagerSecretRotation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotation;

SecretsmanagerSecretRotation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotation;

SecretsmanagerSecretRotation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotation;

SecretsmanagerSecretRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsmanagerSecretRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsmanagerSecretRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsmanagerSecretRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled">rotationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput">rotateImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput">rotationLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput">rotationRulesInput</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately">rotateImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled"></a>

```java
public IResolvable getRotationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules"></a>

```java
public SecretsmanagerSecretRotationRotationRulesOutputReference getRotationRules();
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `rotateImmediatelyInput`<sup>Optional</sup> <a name="rotateImmediatelyInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput"></a>

```java
public java.lang.Object getRotateImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rotationLambdaArnInput`<sup>Optional</sup> <a name="rotationLambdaArnInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput"></a>

```java
public java.lang.String getRotationLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `rotationRulesInput`<sup>Optional</sup> <a name="rotationRulesInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput"></a>

```java
public SecretsmanagerSecretRotationRotationRules getRotationRulesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `rotateImmediately`<sup>Required</sup> <a name="rotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately"></a>

```java
public java.lang.Object getRotateImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```java
public java.lang.String getRotationLambdaArn();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretRotationConfig <a name="SecretsmanagerSecretRotationConfig" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotationConfig;

SecretsmanagerSecretRotationConfig.builder()
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
    .rotationRules(SecretsmanagerSecretRotationRotationRules)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .rotateImmediately(java.lang.Boolean)
//  .rotateImmediately(IResolvable)
//  .rotationLambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately">rotateImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules"></a>

```java
public SecretsmanagerSecretRotationRotationRules getRotationRules();
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}

---

##### `rotateImmediately`<sup>Optional</sup> <a name="rotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately"></a>

```java
public java.lang.Object getRotateImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}.

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn"></a>

```java
public java.lang.String getRotationLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.

---

### SecretsmanagerSecretRotationRotationRules <a name="SecretsmanagerSecretRotationRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotationRotationRules;

SecretsmanagerSecretRotationRotationRules.builder()
//  .automaticallyAfterDays(java.lang.Number)
//  .duration(java.lang.String)
//  .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}. |

---

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays"></a>

```java
public java.lang.Number getAutomaticallyAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}.

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretRotationRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_rotation.SecretsmanagerSecretRotationRotationRulesOutputReference;

new SecretsmanagerSecretRotationRotationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays">resetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticallyAfterDays` <a name="resetAutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```java
public void resetAutomaticallyAfterDays()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput">automaticallyAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticallyAfterDaysInput`<sup>Optional</sup> <a name="automaticallyAfterDaysInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```java
public java.lang.Number getAutomaticallyAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```java
public java.lang.Number getAutomaticallyAfterDays();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```java
public SecretsmanagerSecretRotationRotationRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---



