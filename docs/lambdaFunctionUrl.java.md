# `lambdaFunctionUrl` Submodule <a name="`lambdaFunctionUrl` Submodule" id="@cdktf/provider-aws.lambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionUrl <a name="LambdaFunctionUrl" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.Builder.create(Construct scope, java.lang.String id)
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
    .authorizationType(java.lang.String)
    .functionName(java.lang.String)
//  .cors(LambdaFunctionUrlCors)
//  .id(java.lang.String)
//  .qualifier(java.lang.String)
//  .timeouts(LambdaFunctionUrlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCors` <a name="putCors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors"></a>

```java
public void putCors(LambdaFunctionUrlCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts"></a>

```java
public void putTimeouts(LambdaFunctionUrlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

---

##### `resetCors` <a name="resetCors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors"></a>

```java
public void resetCors()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId"></a>

```java
public void resetId()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier"></a>

```java
public void resetQualifier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl">functionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId">urlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors"></a>

```java
public LambdaFunctionUrlCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl"></a>

```java
public java.lang.String getFunctionUrl();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts"></a>

```java
public LambdaFunctionUrlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a>

---

##### `urlId`<sup>Required</sup> <a name="urlId" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId"></a>

```java
public java.lang.String getUrlId();
```

- *Type:* java.lang.String

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput"></a>

```java
public LambdaFunctionUrlCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionUrlConfig <a name="LambdaFunctionUrlConfig" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrlConfig;

LambdaFunctionUrlConfig.builder()
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
    .authorizationType(java.lang.String)
    .functionName(java.lang.String)
//  .cors(LambdaFunctionUrlCors)
//  .id(java.lang.String)
//  .qualifier(java.lang.String)
//  .timeouts(LambdaFunctionUrlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors"></a>

```java
public LambdaFunctionUrlCors getCors();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts"></a>

```java
public LambdaFunctionUrlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

### LambdaFunctionUrlCors <a name="LambdaFunctionUrlCors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrlCors;

LambdaFunctionUrlCors.builder()
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#max_age LambdaFunctionUrl#max_age}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}.

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}.

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}.

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#max_age LambdaFunctionUrl#max_age}.

---

### LambdaFunctionUrlTimeouts <a name="LambdaFunctionUrlTimeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrlTimeouts;

LambdaFunctionUrlTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#create LambdaFunctionUrl#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#create LambdaFunctionUrl#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionUrlCorsOutputReference <a name="LambdaFunctionUrlCorsOutputReference" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrlCorsOutputReference;

new LambdaFunctionUrlCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```java
public LambdaFunctionUrlCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---


### LambdaFunctionUrlTimeoutsOutputReference <a name="LambdaFunctionUrlTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function_url.LambdaFunctionUrlTimeoutsOutputReference;

new LambdaFunctionUrlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



