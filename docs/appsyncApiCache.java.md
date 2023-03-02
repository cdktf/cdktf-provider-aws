# `appsyncApiCache` Submodule <a name="`appsyncApiCache` Submodule" id="@cdktf/provider-aws.appsyncApiCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApiCache <a name="AppsyncApiCache" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache aws_appsync_api_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.Builder.create(Construct scope, java.lang.String id)
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
    .apiCachingBehavior(java.lang.String)
    .apiId(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean)
//  .atRestEncryptionEnabled(IResolvable)
//  .id(java.lang.String)
//  .transitEncryptionEnabled(java.lang.Boolean)
//  .transitEncryptionEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiCachingBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.atRestEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.transitEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled"></a>

```java
public void resetAtRestEncryptionEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetId"></a>

```java
public void resetId()
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled"></a>

```java
public void resetTransitEncryptionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput">apiCachingBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiCachingBehaviorInput`<sup>Optional</sup> <a name="apiCachingBehaviorInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput"></a>

```java
public java.lang.String getApiCachingBehaviorInput();
```

- *Type:* java.lang.String

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput"></a>

```java
public java.lang.Object getAtRestEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput"></a>

```java
public java.lang.Object getTransitEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior"></a>

```java
public java.lang.String getApiCachingBehavior();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Object getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled"></a>

```java
public java.lang.Object getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiCacheConfig <a name="AppsyncApiCacheConfig" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api_cache.AppsyncApiCacheConfig;

AppsyncApiCacheConfig.builder()
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
    .apiCachingBehavior(java.lang.String)
    .apiId(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean)
//  .atRestEncryptionEnabled(IResolvable)
//  .id(java.lang.String)
//  .transitEncryptionEnabled(java.lang.Boolean)
//  .transitEncryptionEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior"></a>

```java
public java.lang.String getApiCachingBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Object getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled"></a>

```java
public java.lang.Object getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}.

---



