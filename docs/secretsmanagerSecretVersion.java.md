# `secretsmanagerSecretVersion` Submodule <a name="`secretsmanagerSecretVersion` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretVersion <a name="SecretsmanagerSecretVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_version.SecretsmanagerSecretVersion;

SecretsmanagerSecretVersion.Builder.create(Construct scope, java.lang.String id)
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
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .secretBinary(java.lang.String)
//  .secretString(java.lang.String)
//  .versionStages(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretBinary">secretBinary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretString">secretString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.versionStages">versionStages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretBinary`<sup>Optional</sup> <a name="secretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretBinary"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `secretString`<sup>Optional</sup> <a name="secretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `versionStages`<sup>Optional</sup> <a name="versionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.versionStages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary">resetSecretBinary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString">resetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages">resetVersionStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId"></a>

```java
public void resetId()
```

##### `resetSecretBinary` <a name="resetSecretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary"></a>

```java
public void resetSecretBinary()
```

##### `resetSecretString` <a name="resetSecretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString"></a>

```java
public void resetSecretString()
```

##### `resetVersionStages` <a name="resetVersionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages"></a>

```java
public void resetVersionStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_version.SecretsmanagerSecretVersion;

SecretsmanagerSecretVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_version.SecretsmanagerSecretVersion;

SecretsmanagerSecretVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_version.SecretsmanagerSecretVersion;

SecretsmanagerSecretVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput">secretBinaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput">secretStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput">versionStagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary">secretBinary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString">secretString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages">versionStages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `secretBinaryInput`<sup>Optional</sup> <a name="secretBinaryInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput"></a>

```java
public java.lang.String getSecretBinaryInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretStringInput`<sup>Optional</sup> <a name="secretStringInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput"></a>

```java
public java.lang.String getSecretStringInput();
```

- *Type:* java.lang.String

---

##### `versionStagesInput`<sup>Optional</sup> <a name="versionStagesInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput"></a>

```java
public java.util.List<java.lang.String> getVersionStagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `secretBinary`<sup>Required</sup> <a name="secretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary"></a>

```java
public java.lang.String getSecretBinary();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretString`<sup>Required</sup> <a name="secretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString"></a>

```java
public java.lang.String getSecretString();
```

- *Type:* java.lang.String

---

##### `versionStages`<sup>Required</sup> <a name="versionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages"></a>

```java
public java.util.List<java.lang.String> getVersionStages();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretVersionConfig <a name="SecretsmanagerSecretVersionConfig" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret_version.SecretsmanagerSecretVersionConfig;

SecretsmanagerSecretVersionConfig.builder()
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
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .secretBinary(java.lang.String)
//  .secretString(java.lang.String)
//  .versionStages(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary">secretBinary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString">secretString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages">versionStages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretBinary`<sup>Optional</sup> <a name="secretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary"></a>

```java
public java.lang.String getSecretBinary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `secretString`<sup>Optional</sup> <a name="secretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString"></a>

```java
public java.lang.String getSecretString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `versionStages`<sup>Optional</sup> <a name="versionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages"></a>

```java
public java.util.List<java.lang.String> getVersionStages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---



