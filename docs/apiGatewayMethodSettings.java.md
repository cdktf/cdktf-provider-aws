# `apiGatewayMethodSettings` Submodule <a name="`apiGatewayMethodSettings` Submodule" id="@cdktf/provider-aws.apiGatewayMethodSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethodSettings <a name="ApiGatewayMethodSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettings;

ApiGatewayMethodSettings.Builder.create(Construct scope, java.lang.String id)
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
    .methodPath(java.lang.String)
    .restApiId(java.lang.String)
    .settings(ApiGatewayMethodSettingsSettings)
    .stageName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.methodPath">methodPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `methodPath`<sup>Required</sup> <a name="methodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.methodPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.stageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings"></a>

```java
public void putSettings(ApiGatewayMethodSettingsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettings;

ApiGatewayMethodSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettings;

ApiGatewayMethodSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettings;

ApiGatewayMethodSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput">methodPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath">methodPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings"></a>

```java
public ApiGatewayMethodSettingsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `methodPathInput`<sup>Optional</sup> <a name="methodPathInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput"></a>

```java
public java.lang.String getMethodPathInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput"></a>

```java
public ApiGatewayMethodSettingsSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `methodPath`<sup>Required</sup> <a name="methodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath"></a>

```java
public java.lang.String getMethodPath();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodSettingsConfig <a name="ApiGatewayMethodSettingsConfig" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettingsConfig;

ApiGatewayMethodSettingsConfig.builder()
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
    .methodPath(java.lang.String)
    .restApiId(java.lang.String)
    .settings(ApiGatewayMethodSettingsSettings)
    .stageName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath">methodPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `methodPath`<sup>Required</sup> <a name="methodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath"></a>

```java
public java.lang.String getMethodPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings"></a>

```java
public ApiGatewayMethodSettingsSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayMethodSettingsSettings <a name="ApiGatewayMethodSettingsSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettingsSettings;

ApiGatewayMethodSettingsSettings.builder()
//  .cacheDataEncrypted(java.lang.Boolean)
//  .cacheDataEncrypted(IResolvable)
//  .cacheTtlInSeconds(java.lang.Number)
//  .cachingEnabled(java.lang.Boolean)
//  .cachingEnabled(IResolvable)
//  .dataTraceEnabled(java.lang.Boolean)
//  .dataTraceEnabled(IResolvable)
//  .loggingLevel(java.lang.String)
//  .metricsEnabled(java.lang.Boolean)
//  .metricsEnabled(IResolvable)
//  .requireAuthorizationForCacheControl(java.lang.Boolean)
//  .requireAuthorizationForCacheControl(IResolvable)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
//  .unauthorizedCacheControlHeaderStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl">requireAuthorizationForCacheControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy">unauthorizedCacheControlHeaderStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}. |

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted"></a>

```java
public java.lang.Object getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled"></a>

```java
public java.lang.Object getCachingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled"></a>

```java
public java.lang.Object getDataTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}.

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.

---

##### `requireAuthorizationForCacheControl`<sup>Optional</sup> <a name="requireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl"></a>

```java
public java.lang.Object getRequireAuthorizationForCacheControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Optional</sup> <a name="unauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy"></a>

```java
public java.lang.String getUnauthorizedCacheControlHeaderStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayMethodSettingsSettingsOutputReference <a name="ApiGatewayMethodSettingsSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_method_settings.ApiGatewayMethodSettingsSettingsOutputReference;

new ApiGatewayMethodSettingsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl">resetRequireAuthorizationForCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy">resetUnauthorizedCacheControlHeaderStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted"></a>

```java
public void resetCacheDataEncrypted()
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds"></a>

```java
public void resetCacheTtlInSeconds()
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled"></a>

```java
public void resetCachingEnabled()
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled"></a>

```java
public void resetDataTraceEnabled()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetRequireAuthorizationForCacheControl` <a name="resetRequireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl"></a>

```java
public void resetRequireAuthorizationForCacheControl()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```

##### `resetUnauthorizedCacheControlHeaderStrategy` <a name="resetUnauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy"></a>

```java
public void resetUnauthorizedCacheControlHeaderStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput">requireAuthorizationForCacheControlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput">unauthorizedCacheControlHeaderStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl">requireAuthorizationForCacheControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy">unauthorizedCacheControlHeaderStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```java
public java.lang.Object getCacheDataEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```java
public java.lang.Number getCacheTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput"></a>

```java
public java.lang.Object getCachingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput"></a>

```java
public java.lang.Object getDataTraceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput"></a>

```java
public java.lang.Object getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireAuthorizationForCacheControlInput`<sup>Optional</sup> <a name="requireAuthorizationForCacheControlInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput"></a>

```java
public java.lang.Object getRequireAuthorizationForCacheControlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `unauthorizedCacheControlHeaderStrategyInput`<sup>Optional</sup> <a name="unauthorizedCacheControlHeaderStrategyInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput"></a>

```java
public java.lang.String getUnauthorizedCacheControlHeaderStrategyInput();
```

- *Type:* java.lang.String

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted"></a>

```java
public java.lang.Object getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled"></a>

```java
public java.lang.Object getCachingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled"></a>

```java
public java.lang.Object getDataTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireAuthorizationForCacheControl`<sup>Required</sup> <a name="requireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl"></a>

```java
public java.lang.Object getRequireAuthorizationForCacheControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Required</sup> <a name="unauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy"></a>

```java
public java.lang.String getUnauthorizedCacheControlHeaderStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayMethodSettingsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---



