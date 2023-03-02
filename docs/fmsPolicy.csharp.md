# `fmsPolicy` Submodule <a name="`fmsPolicy` Submodule" id="@cdktf/provider-aws.fmsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsPolicy <a name="FmsPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy aws_fms_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicy(Construct Scope, string Id, FmsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap">PutExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap">PutIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData">PutSecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources">ResetDeleteAllPolicyResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources">ResetDeleteUnusedFmManagedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap">ResetExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap">ResetIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled">ResetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList">ResetResourceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutExcludeMap` <a name="PutExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap"></a>

```csharp
private void PutExcludeMap(FmsPolicyExcludeMap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `PutIncludeMap` <a name="PutIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap"></a>

```csharp
private void PutIncludeMap(FmsPolicyIncludeMap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `PutSecurityServicePolicyData` <a name="PutSecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData"></a>

```csharp
private void PutSecurityServicePolicyData(FmsPolicySecurityServicePolicyData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `ResetDeleteAllPolicyResources` <a name="ResetDeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources"></a>

```csharp
private void ResetDeleteAllPolicyResources()
```

##### `ResetDeleteUnusedFmManagedResources` <a name="ResetDeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources"></a>

```csharp
private void ResetDeleteUnusedFmManagedResources()
```

##### `ResetExcludeMap` <a name="ResetExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap"></a>

```csharp
private void ResetExcludeMap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeMap` <a name="ResetIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap"></a>

```csharp
private void ResetIncludeMap()
```

##### `ResetRemediationEnabled` <a name="ResetRemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled"></a>

```csharp
private void ResetRemediationEnabled()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetResourceTypeList` <a name="ResetResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList"></a>

```csharp
private void ResetResourceTypeList()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FmsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FmsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FmsPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap">ExcludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap">IncludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken">PolicyUpdateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData">SecurityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput">DeleteAllPolicyResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput">DeleteUnusedFmManagedResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput">ExcludeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput">ExcludeResourceTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput">IncludeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput">RemediationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput">ResourceTypeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput">SecurityServicePolicyDataInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources">DeleteAllPolicyResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources">DeleteUnusedFmManagedResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags">ExcludeResourceTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled">RemediationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList">ResourceTypeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExcludeMap`<sup>Required</sup> <a name="ExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap"></a>

```csharp
public FmsPolicyExcludeMapOutputReference ExcludeMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a>

---

##### `IncludeMap`<sup>Required</sup> <a name="IncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap"></a>

```csharp
public FmsPolicyIncludeMapOutputReference IncludeMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a>

---

##### `PolicyUpdateToken`<sup>Required</sup> <a name="PolicyUpdateToken" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken"></a>

```csharp
public string PolicyUpdateToken { get; }
```

- *Type:* string

---

##### `SecurityServicePolicyData`<sup>Required</sup> <a name="SecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData"></a>

```csharp
public FmsPolicySecurityServicePolicyDataOutputReference SecurityServicePolicyData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a>

---

##### `DeleteAllPolicyResourcesInput`<sup>Optional</sup> <a name="DeleteAllPolicyResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput"></a>

```csharp
public object DeleteAllPolicyResourcesInput { get; }
```

- *Type:* object

---

##### `DeleteUnusedFmManagedResourcesInput`<sup>Optional</sup> <a name="DeleteUnusedFmManagedResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput"></a>

```csharp
public object DeleteUnusedFmManagedResourcesInput { get; }
```

- *Type:* object

---

##### `ExcludeMapInput`<sup>Optional</sup> <a name="ExcludeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput"></a>

```csharp
public FmsPolicyExcludeMap ExcludeMapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `ExcludeResourceTagsInput`<sup>Optional</sup> <a name="ExcludeResourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput"></a>

```csharp
public object ExcludeResourceTagsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeMapInput`<sup>Optional</sup> <a name="IncludeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput"></a>

```csharp
public FmsPolicyIncludeMap IncludeMapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemediationEnabledInput`<sup>Optional</sup> <a name="RemediationEnabledInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput"></a>

```csharp
public object RemediationEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceTypeListInput`<sup>Optional</sup> <a name="ResourceTypeListInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput"></a>

```csharp
public string[] ResourceTypeListInput { get; }
```

- *Type:* string[]

---

##### `SecurityServicePolicyDataInput`<sup>Optional</sup> <a name="SecurityServicePolicyDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput"></a>

```csharp
public FmsPolicySecurityServicePolicyData SecurityServicePolicyDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteAllPolicyResources`<sup>Required</sup> <a name="DeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources"></a>

```csharp
public object DeleteAllPolicyResources { get; }
```

- *Type:* object

---

##### `DeleteUnusedFmManagedResources`<sup>Required</sup> <a name="DeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources"></a>

```csharp
public object DeleteUnusedFmManagedResources { get; }
```

- *Type:* object

---

##### `ExcludeResourceTags`<sup>Required</sup> <a name="ExcludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags"></a>

```csharp
public object ExcludeResourceTags { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled"></a>

```csharp
public object RemediationEnabled { get; }
```

- *Type:* object

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ResourceTypeList`<sup>Required</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList"></a>

```csharp
public string[] ResourceTypeList { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FmsPolicyConfig <a name="FmsPolicyConfig" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ExcludeResourceTags,
    string Name,
    FmsPolicySecurityServicePolicyData SecurityServicePolicyData,
    object DeleteAllPolicyResources = null,
    object DeleteUnusedFmManagedResources = null,
    FmsPolicyExcludeMap ExcludeMap = null,
    string Id = null,
    FmsPolicyIncludeMap IncludeMap = null,
    object RemediationEnabled = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null,
    string ResourceType = null,
    string[] ResourceTypeList = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags">ExcludeResourceTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData">SecurityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | security_service_policy_data block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources">DeleteAllPolicyResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources">DeleteUnusedFmManagedResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap">ExcludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | exclude_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap">IncludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | include_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled">RemediationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList">ResourceTypeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExcludeResourceTags`<sup>Required</sup> <a name="ExcludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags"></a>

```csharp
public object ExcludeResourceTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}.

---

##### `SecurityServicePolicyData`<sup>Required</sup> <a name="SecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData"></a>

```csharp
public FmsPolicySecurityServicePolicyData SecurityServicePolicyData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

security_service_policy_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `DeleteAllPolicyResources`<sup>Optional</sup> <a name="DeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources"></a>

```csharp
public object DeleteAllPolicyResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `DeleteUnusedFmManagedResources`<sup>Optional</sup> <a name="DeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources"></a>

```csharp
public object DeleteUnusedFmManagedResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}.

---

##### `ExcludeMap`<sup>Optional</sup> <a name="ExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap"></a>

```csharp
public FmsPolicyExcludeMap ExcludeMap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

exclude_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeMap`<sup>Optional</sup> <a name="IncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap"></a>

```csharp
public FmsPolicyIncludeMap IncludeMap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

include_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#include_map FmsPolicy#include_map}

---

##### `RemediationEnabled`<sup>Optional</sup> <a name="RemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled"></a>

```csharp
public object RemediationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}.

---

##### `ResourceTypeList`<sup>Optional</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList"></a>

```csharp
public string[] ResourceTypeList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}.

---

### FmsPolicyExcludeMap <a name="FmsPolicyExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicyExcludeMap {
    string[] Account = null,
    string[] Orgunit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account">Account</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit">Orgunit</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account"></a>

```csharp
public string[] Account { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `Orgunit`<sup>Optional</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit"></a>

```csharp
public string[] Orgunit { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyIncludeMap <a name="FmsPolicyIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicyIncludeMap {
    string[] Account = null,
    string[] Orgunit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account">Account</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit">Orgunit</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account"></a>

```csharp
public string[] Account { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `Orgunit`<sup>Optional</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit"></a>

```csharp
public string[] Orgunit { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicySecurityServicePolicyData <a name="FmsPolicySecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicySecurityServicePolicyData {
    string Type,
    string ManagedServiceData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData">ManagedServiceData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}.

---

##### `ManagedServiceData`<sup>Optional</sup> <a name="ManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData"></a>

```csharp
public string ManagedServiceData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### FmsPolicyExcludeMapOutputReference <a name="FmsPolicyExcludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicyExcludeMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit">ResetOrgunit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetOrgunit` <a name="ResetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit"></a>

```csharp
private void ResetOrgunit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput">AccountInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput">OrgunitInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account">Account</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit">Orgunit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput"></a>

```csharp
public string[] AccountInput { get; }
```

- *Type:* string[]

---

##### `OrgunitInput`<sup>Optional</sup> <a name="OrgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput"></a>

```csharp
public string[] OrgunitInput { get; }
```

- *Type:* string[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account"></a>

```csharp
public string[] Account { get; }
```

- *Type:* string[]

---

##### `Orgunit`<sup>Required</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit"></a>

```csharp
public string[] Orgunit { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue"></a>

```csharp
public FmsPolicyExcludeMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---


### FmsPolicyIncludeMapOutputReference <a name="FmsPolicyIncludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicyIncludeMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit">ResetOrgunit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetOrgunit` <a name="ResetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit"></a>

```csharp
private void ResetOrgunit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput">AccountInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput">OrgunitInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account">Account</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit">Orgunit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput"></a>

```csharp
public string[] AccountInput { get; }
```

- *Type:* string[]

---

##### `OrgunitInput`<sup>Optional</sup> <a name="OrgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput"></a>

```csharp
public string[] OrgunitInput { get; }
```

- *Type:* string[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account"></a>

```csharp
public string[] Account { get; }
```

- *Type:* string[]

---

##### `Orgunit`<sup>Required</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit"></a>

```csharp
public string[] Orgunit { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue"></a>

```csharp
public FmsPolicyIncludeMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---


### FmsPolicySecurityServicePolicyDataOutputReference <a name="FmsPolicySecurityServicePolicyDataOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FmsPolicySecurityServicePolicyDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData">ResetManagedServiceData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedServiceData` <a name="ResetManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData"></a>

```csharp
private void ResetManagedServiceData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput">ManagedServiceDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData">ManagedServiceData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedServiceDataInput`<sup>Optional</sup> <a name="ManagedServiceDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput"></a>

```csharp
public string ManagedServiceDataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ManagedServiceData`<sup>Required</sup> <a name="ManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData"></a>

```csharp
public string ManagedServiceData { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue"></a>

```csharp
public FmsPolicySecurityServicePolicyData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---



