# `appsyncApiCache` Submodule <a name="`appsyncApiCache` Submodule" id="@cdktf/provider-aws.appsyncApiCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApiCache <a name="AppsyncApiCache" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache aws_appsync_api_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncApiCache(Construct Scope, string Id, AppsyncApiCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig">AppsyncApiCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig">AppsyncApiCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled">ResetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAtRestEncryptionEnabled` <a name="ResetAtRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled"></a>

```csharp
private void ResetAtRestEncryptionEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled"></a>

```csharp
private void ResetTransitEncryptionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncApiCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncApiCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncApiCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput">ApiCachingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput">AtRestEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior">ApiCachingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiCachingBehaviorInput`<sup>Optional</sup> <a name="ApiCachingBehaviorInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput"></a>

```csharp
public string ApiCachingBehaviorInput { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `AtRestEncryptionEnabledInput`<sup>Optional</sup> <a name="AtRestEncryptionEnabledInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput"></a>

```csharp
public object AtRestEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput"></a>

```csharp
public object TransitEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiCachingBehavior`<sup>Required</sup> <a name="ApiCachingBehavior" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior"></a>

```csharp
public string ApiCachingBehavior { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled"></a>

```csharp
public object AtRestEncryptionEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled"></a>

```csharp
public object TransitEncryptionEnabled { get; }
```

- *Type:* object

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiCacheConfig <a name="AppsyncApiCacheConfig" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncApiCacheConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiCachingBehavior,
    string ApiId,
    double Ttl,
    string Type,
    object AtRestEncryptionEnabled = null,
    string Id = null,
    object TransitEncryptionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior">ApiCachingBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiCachingBehavior`<sup>Required</sup> <a name="ApiCachingBehavior" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior"></a>

```csharp
public string ApiCachingBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}.

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}.

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}.

---

##### `AtRestEncryptionEnabled`<sup>Optional</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled"></a>

```csharp
public object AtRestEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled"></a>

```csharp
public object TransitEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}.

---



