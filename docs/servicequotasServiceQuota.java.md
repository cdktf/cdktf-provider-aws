# `servicequotasServiceQuota` Submodule <a name="`servicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.servicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasServiceQuota <a name="ServicequotasServiceQuota" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicequotas_service_quota.ServicequotasServiceQuota;

ServicequotasServiceQuota.Builder.create(Construct scope, java.lang.String id)
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
    .quotaCode(java.lang.String)
    .serviceCode(java.lang.String)
    .value(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.quotaCode">quotaCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.serviceCode">serviceCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.quotaCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.serviceCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.value"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicequotas_service_quota.ServicequotasServiceQuota;

ServicequotasServiceQuota.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicequotas_service_quota.ServicequotasServiceQuota;

ServicequotasServiceQuota.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicequotas_service_quota.ServicequotasServiceQuota;

ServicequotasServiceQuota.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable">adjustable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue">defaultValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName">quotaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId">requestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus">requestStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput">quotaCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput">serviceCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode">quotaCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode">serviceCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adjustable`<sup>Required</sup> <a name="adjustable" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable"></a>

```java
public IResolvable getAdjustable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue"></a>

```java
public java.lang.Number getDefaultValue();
```

- *Type:* java.lang.Number

---

##### `quotaName`<sup>Required</sup> <a name="quotaName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName"></a>

```java
public java.lang.String getQuotaName();
```

- *Type:* java.lang.String

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId"></a>

```java
public java.lang.String getRequestId();
```

- *Type:* java.lang.String

---

##### `requestStatus`<sup>Required</sup> <a name="requestStatus" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus"></a>

```java
public java.lang.String getRequestStatus();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `quotaCodeInput`<sup>Optional</sup> <a name="quotaCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput"></a>

```java
public java.lang.String getQuotaCodeInput();
```

- *Type:* java.lang.String

---

##### `serviceCodeInput`<sup>Optional</sup> <a name="serviceCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput"></a>

```java
public java.lang.String getServiceCodeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode"></a>

```java
public java.lang.String getQuotaCode();
```

- *Type:* java.lang.String

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode"></a>

```java
public java.lang.String getServiceCode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasServiceQuotaConfig <a name="ServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicequotas_service_quota.ServicequotasServiceQuotaConfig;

ServicequotasServiceQuotaConfig.builder()
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
    .quotaCode(java.lang.String)
    .serviceCode(java.lang.String)
    .value(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode">quotaCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode">serviceCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode"></a>

```java
public java.lang.String getQuotaCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode"></a>

```java
public java.lang.String getServiceCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



