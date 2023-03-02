# `lambdaAlias` Submodule <a name="`lambdaAlias` Submodule" id="@cdktf/provider-aws.lambdaAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaAlias <a name="LambdaAlias" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias aws_lambda_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAlias;

LambdaAlias.Builder.create(Construct scope, java.lang.String id)
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
    .functionName(java.lang.String)
    .functionVersion(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .routingConfig(LambdaAliasRoutingConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig">routingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | routing_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}.

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingConfig`<sup>Optional</sup> <a name="routingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#routing_config LambdaAlias#routing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig">putRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetRoutingConfig">resetRoutingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRoutingConfig` <a name="putRoutingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig"></a>

```java
public void putRoutingConfig(LambdaAliasRoutingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetId"></a>

```java
public void resetId()
```

##### `resetRoutingConfig` <a name="resetRoutingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetRoutingConfig"></a>

```java
public void resetRoutingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAlias;

LambdaAlias.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAlias;

LambdaAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAlias;

LambdaAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.invokeArn">invokeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersionInput">functionVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfigInput">routingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `invokeArn`<sup>Required</sup> <a name="invokeArn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.invokeArn"></a>

```java
public java.lang.String getInvokeArn();
```

- *Type:* java.lang.String

---

##### `routingConfig`<sup>Required</sup> <a name="routingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfig"></a>

```java
public LambdaAliasRoutingConfigOutputReference getRoutingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `functionVersionInput`<sup>Optional</sup> <a name="functionVersionInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersionInput"></a>

```java
public java.lang.String getFunctionVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routingConfigInput`<sup>Optional</sup> <a name="routingConfigInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfigInput"></a>

```java
public LambdaAliasRoutingConfig getRoutingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersion"></a>

```java
public java.lang.String getFunctionVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaAliasConfig <a name="LambdaAliasConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAliasConfig;

LambdaAliasConfig.builder()
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
    .functionName(java.lang.String)
    .functionVersion(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .routingConfig(LambdaAliasRoutingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | routing_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}.

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionVersion"></a>

```java
public java.lang.String getFunctionVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingConfig`<sup>Optional</sup> <a name="routingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.routingConfig"></a>

```java
public LambdaAliasRoutingConfig getRoutingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#routing_config LambdaAlias#routing_config}

---

### LambdaAliasRoutingConfig <a name="LambdaAliasRoutingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAliasRoutingConfig;

LambdaAliasRoutingConfig.builder()
//  .additionalVersionWeights(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights">additionalVersionWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}. |

---

##### `additionalVersionWeights`<sup>Optional</sup> <a name="additionalVersionWeights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAdditionalVersionWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaAliasRoutingConfigOutputReference <a name="LambdaAliasRoutingConfigOutputReference" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_alias.LambdaAliasRoutingConfigOutputReference;

new LambdaAliasRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights">resetAdditionalVersionWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalVersionWeights` <a name="resetAdditionalVersionWeights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights"></a>

```java
public void resetAdditionalVersionWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput">additionalVersionWeightsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights">additionalVersionWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalVersionWeightsInput`<sup>Optional</sup> <a name="additionalVersionWeightsInput" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAdditionalVersionWeightsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `additionalVersionWeights`<sup>Required</sup> <a name="additionalVersionWeights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAdditionalVersionWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue"></a>

```java
public LambdaAliasRoutingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---



