# `lambdaProvisionedConcurrencyConfig` Submodule <a name="`lambdaProvisionedConcurrencyConfig` Submodule" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaProvisionedConcurrencyConfig <a name="LambdaProvisionedConcurrencyConfig" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config aws_lambda_provisioned_concurrency_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfig;

LambdaProvisionedConcurrencyConfig.Builder.create(Construct scope, java.lang.String id)
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
    .provisionedConcurrentExecutions(java.lang.Number)
    .qualifier(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(LambdaProvisionedConcurrencyConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}.

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.provisionedConcurrentExecutions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}.

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#timeouts LambdaProvisionedConcurrencyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts"></a>

```java
public void putTimeouts(LambdaProvisionedConcurrencyConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfig;

LambdaProvisionedConcurrencyConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfig;

LambdaProvisionedConcurrencyConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfig;

LambdaProvisionedConcurrencyConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput">provisionedConcurrentExecutionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts"></a>

```java
public LambdaProvisionedConcurrencyConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `provisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="provisionedConcurrentExecutionsInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutionsInput();
```

- *Type:* java.lang.Number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutions();
```

- *Type:* java.lang.Number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaProvisionedConcurrencyConfigConfig <a name="LambdaProvisionedConcurrencyConfigConfig" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfigConfig;

LambdaProvisionedConcurrencyConfigConfig.builder()
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
    .provisionedConcurrentExecutions(java.lang.Number)
    .qualifier(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(LambdaProvisionedConcurrencyConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}.

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}.

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts"></a>

```java
public LambdaProvisionedConcurrencyConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#timeouts LambdaProvisionedConcurrencyConfig#timeouts}

---

### LambdaProvisionedConcurrencyConfigTimeouts <a name="LambdaProvisionedConcurrencyConfigTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfigTimeouts;

LambdaProvisionedConcurrencyConfigTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaProvisionedConcurrencyConfigTimeoutsOutputReference <a name="LambdaProvisionedConcurrencyConfigTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_provisioned_concurrency_config.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference;

new LambdaProvisionedConcurrencyConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



