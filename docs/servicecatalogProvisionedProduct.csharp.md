# `servicecatalogProvisionedProduct` Submodule <a name="`servicecatalogProvisionedProduct` Submodule" id="@cdktf/provider-aws.servicecatalogProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisionedProduct <a name="ServicecatalogProvisionedProduct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProduct(Construct Scope, string Id, ServicecatalogProvisionedProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters">PutProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences">PutStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors">ResetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId">ResetPathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName">ResetPathName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName">ResetProductName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId">ResetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName">ResetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters">ResetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources">ResetRetainPhysicalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences">ResetStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProvisioningParameters` <a name="PutProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters"></a>

```csharp
private void PutProvisioningParameters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* object

---

##### `PutStackSetProvisioningPreferences` <a name="PutStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences"></a>

```csharp
private void PutStackSetProvisioningPreferences(ServicecatalogProvisionedProductStackSetProvisioningPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogProvisionedProductTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreErrors` <a name="ResetIgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors"></a>

```csharp
private void ResetIgnoreErrors()
```

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns"></a>

```csharp
private void ResetNotificationArns()
```

##### `ResetPathId` <a name="ResetPathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId"></a>

```csharp
private void ResetPathId()
```

##### `ResetPathName` <a name="ResetPathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName"></a>

```csharp
private void ResetPathName()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetProductName` <a name="ResetProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName"></a>

```csharp
private void ResetProductName()
```

##### `ResetProvisioningArtifactId` <a name="ResetProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId"></a>

```csharp
private void ResetProvisioningArtifactId()
```

##### `ResetProvisioningArtifactName` <a name="ResetProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName"></a>

```csharp
private void ResetProvisioningArtifactName()
```

##### `ResetProvisioningParameters` <a name="ResetProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters"></a>

```csharp
private void ResetProvisioningParameters()
```

##### `ResetRetainPhysicalResources` <a name="ResetRetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources"></a>

```csharp
private void ResetRetainPhysicalResources()
```

##### `ResetStackSetProvisioningPreferences` <a name="ResetStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences"></a>

```csharp
private void ResetStackSetProvisioningPreferences()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogProvisionedProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogProvisionedProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogProvisionedProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames">CloudwatchDashboardNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId">LastProvisioningRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId">LastRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId">LastSuccessfulProvisioningRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn">LaunchRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs">Outputs</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences">StackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput">IgnoreErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput">PathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput">PathNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput">ProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput">ProvisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput">ProvisioningArtifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput">ProvisioningParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput">RetainPhysicalResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput">StackSetProvisioningPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors">IgnoreErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId">PathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName">PathName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources">RetainPhysicalResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchDashboardNames`<sup>Required</sup> <a name="CloudwatchDashboardNames" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames"></a>

```csharp
public string[] CloudwatchDashboardNames { get; }
```

- *Type:* string[]

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `LastProvisioningRecordId`<sup>Required</sup> <a name="LastProvisioningRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId"></a>

```csharp
public string LastProvisioningRecordId { get; }
```

- *Type:* string

---

##### `LastRecordId`<sup>Required</sup> <a name="LastRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId"></a>

```csharp
public string LastRecordId { get; }
```

- *Type:* string

---

##### `LastSuccessfulProvisioningRecordId`<sup>Required</sup> <a name="LastSuccessfulProvisioningRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId"></a>

```csharp
public string LastSuccessfulProvisioningRecordId { get; }
```

- *Type:* string

---

##### `LaunchRoleArn`<sup>Required</sup> <a name="LaunchRoleArn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn"></a>

```csharp
public string LaunchRoleArn { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs"></a>

```csharp
public ServicecatalogProvisionedProductOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a>

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters"></a>

```csharp
public ServicecatalogProvisionedProductProvisioningParametersList ProvisioningParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a>

---

##### `StackSetProvisioningPreferences`<sup>Required</sup> <a name="StackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences"></a>

```csharp
public ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference StackSetProvisioningPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts"></a>

```csharp
public ServicecatalogProvisionedProductTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreErrorsInput`<sup>Optional</sup> <a name="IgnoreErrorsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput"></a>

```csharp
public object IgnoreErrorsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput"></a>

```csharp
public string[] NotificationArnsInput { get; }
```

- *Type:* string[]

---

##### `PathIdInput`<sup>Optional</sup> <a name="PathIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput"></a>

```csharp
public string PathIdInput { get; }
```

- *Type:* string

---

##### `PathNameInput`<sup>Optional</sup> <a name="PathNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput"></a>

```csharp
public string PathNameInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput"></a>

```csharp
public string ProductNameInput { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactIdInput`<sup>Optional</sup> <a name="ProvisioningArtifactIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput"></a>

```csharp
public string ProvisioningArtifactIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactNameInput`<sup>Optional</sup> <a name="ProvisioningArtifactNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput"></a>

```csharp
public string ProvisioningArtifactNameInput { get; }
```

- *Type:* string

---

##### `ProvisioningParametersInput`<sup>Optional</sup> <a name="ProvisioningParametersInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput"></a>

```csharp
public object ProvisioningParametersInput { get; }
```

- *Type:* object

---

##### `RetainPhysicalResourcesInput`<sup>Optional</sup> <a name="RetainPhysicalResourcesInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput"></a>

```csharp
public object RetainPhysicalResourcesInput { get; }
```

- *Type:* object

---

##### `StackSetProvisioningPreferencesInput`<sup>Optional</sup> <a name="StackSetProvisioningPreferencesInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput"></a>

```csharp
public ServicecatalogProvisionedProductStackSetProvisioningPreferences StackSetProvisioningPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreErrors`<sup>Required</sup> <a name="IgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors"></a>

```csharp
public object IgnoreErrors { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; }
```

- *Type:* string[]

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId"></a>

```csharp
public string PathId { get; }
```

- *Type:* string

---

##### `PathName`<sup>Required</sup> <a name="PathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName"></a>

```csharp
public string PathName { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactName`<sup>Required</sup> <a name="ProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName"></a>

```csharp
public string ProvisioningArtifactName { get; }
```

- *Type:* string

---

##### `RetainPhysicalResources`<sup>Required</sup> <a name="RetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources"></a>

```csharp
public object RetainPhysicalResources { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisionedProductConfig <a name="ServicecatalogProvisionedProductConfig" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AcceptLanguage = null,
    string Id = null,
    object IgnoreErrors = null,
    string[] NotificationArns = null,
    string PathId = null,
    string PathName = null,
    string ProductId = null,
    string ProductName = null,
    string ProvisioningArtifactId = null,
    string ProvisioningArtifactName = null,
    object ProvisioningParameters = null,
    object RetainPhysicalResources = null,
    ServicecatalogProvisionedProductStackSetProvisioningPreferences StackSetProvisioningPreferences = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ServicecatalogProvisionedProductTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors">IgnoreErrors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId">PathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName">PathName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName">ProductName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters">ProvisioningParameters</a></code> | <code>object</code> | provisioning_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources">RetainPhysicalResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences">StackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | stack_set_provisioning_preferences block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreErrors`<sup>Optional</sup> <a name="IgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors"></a>

```csharp
public object IgnoreErrors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}.

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}.

---

##### `PathId`<sup>Optional</sup> <a name="PathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId"></a>

```csharp
public string PathId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}.

---

##### `PathName`<sup>Optional</sup> <a name="PathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName"></a>

```csharp
public string PathName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}.

---

##### `ProductName`<sup>Optional</sup> <a name="ProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName"></a>

```csharp
public string ProductName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}.

---

##### `ProvisioningArtifactId`<sup>Optional</sup> <a name="ProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}.

---

##### `ProvisioningArtifactName`<sup>Optional</sup> <a name="ProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName"></a>

```csharp
public string ProvisioningArtifactName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}.

---

##### `ProvisioningParameters`<sup>Optional</sup> <a name="ProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters"></a>

```csharp
public object ProvisioningParameters { get; set; }
```

- *Type:* object

provisioning_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}

---

##### `RetainPhysicalResources`<sup>Optional</sup> <a name="RetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources"></a>

```csharp
public object RetainPhysicalResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}.

---

##### `StackSetProvisioningPreferences`<sup>Optional</sup> <a name="StackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences"></a>

```csharp
public ServicecatalogProvisionedProductStackSetProvisioningPreferences StackSetProvisioningPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

stack_set_provisioning_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts"></a>

```csharp
public ServicecatalogProvisionedProductTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}

---

### ServicecatalogProvisionedProductOutputs <a name="ServicecatalogProvisionedProductOutputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductOutputs {

};
```


### ServicecatalogProvisionedProductProvisioningParameters <a name="ServicecatalogProvisionedProductProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductProvisioningParameters {
    string Key,
    object UsePreviousValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue">UsePreviousValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}.

---

##### `UsePreviousValue`<sup>Optional</sup> <a name="UsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue"></a>

```csharp
public object UsePreviousValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}.

---

### ServicecatalogProvisionedProductStackSetProvisioningPreferences <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductStackSetProvisioningPreferences {
    string[] Accounts = null,
    double FailureToleranceCount = null,
    double FailureTolerancePercentage = null,
    double MaxConcurrencyCount = null,
    double MaxConcurrencyPercentage = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts">Accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount">MaxConcurrencyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage">MaxConcurrencyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts"></a>

```csharp
public string[] Accounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}.

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount"></a>

```csharp
public double FailureToleranceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage"></a>

```csharp
public double FailureTolerancePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}.

---

##### `MaxConcurrencyCount`<sup>Optional</sup> <a name="MaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount"></a>

```csharp
public double MaxConcurrencyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}.

---

##### `MaxConcurrencyPercentage`<sup>Optional</sup> <a name="MaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage"></a>

```csharp
public double MaxConcurrencyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}.

---

### ServicecatalogProvisionedProductTimeouts <a name="ServicecatalogProvisionedProductTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisionedProductOutputsList <a name="ServicecatalogProvisionedProductOutputsList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get"></a>

```csharp
private ServicecatalogProvisionedProductOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServicecatalogProvisionedProductOutputsOutputReference <a name="ServicecatalogProvisionedProductOutputsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue"></a>

```csharp
public ServicecatalogProvisionedProductOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a>

---


### ServicecatalogProvisionedProductProvisioningParametersList <a name="ServicecatalogProvisionedProductProvisioningParametersList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductProvisioningParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get"></a>

```csharp
private ServicecatalogProvisionedProductProvisioningParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServicecatalogProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogProvisionedProductProvisioningParametersOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductProvisioningParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue">ResetUsePreviousValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsePreviousValue` <a name="ResetUsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue"></a>

```csharp
private void ResetUsePreviousValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput">UsePreviousValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue">UsePreviousValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `UsePreviousValueInput`<sup>Optional</sup> <a name="UsePreviousValueInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput"></a>

```csharp
public object UsePreviousValueInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `UsePreviousValue`<sup>Required</sup> <a name="UsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue"></a>

```csharp
public object UsePreviousValue { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount">ResetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage">ResetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts"></a>

```csharp
private void ResetAccounts()
```

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount"></a>

```csharp
private void ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```csharp
private void ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrencyCount` <a name="ResetMaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount"></a>

```csharp
private void ResetMaxConcurrencyCount()
```

##### `ResetMaxConcurrencyPercentage` <a name="ResetMaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage"></a>

```csharp
private void ResetMaxConcurrencyPercentage()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput">AccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput">MaxConcurrencyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput">MaxConcurrencyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount">MaxConcurrencyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage">MaxConcurrencyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput"></a>

```csharp
public string[] AccountsInput { get; }
```

- *Type:* string[]

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput"></a>

```csharp
public double FailureToleranceCountInput { get; }
```

- *Type:* double

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```csharp
public double FailureTolerancePercentageInput { get; }
```

- *Type:* double

---

##### `MaxConcurrencyCountInput`<sup>Optional</sup> <a name="MaxConcurrencyCountInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput"></a>

```csharp
public double MaxConcurrencyCountInput { get; }
```

- *Type:* double

---

##### `MaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="MaxConcurrencyPercentageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput"></a>

```csharp
public double MaxConcurrencyPercentageInput { get; }
```

- *Type:* double

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount"></a>

```csharp
public double FailureToleranceCount { get; }
```

- *Type:* double

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage"></a>

```csharp
public double FailureTolerancePercentage { get; }
```

- *Type:* double

---

##### `MaxConcurrencyCount`<sup>Required</sup> <a name="MaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount"></a>

```csharp
public double MaxConcurrencyCount { get; }
```

- *Type:* double

---

##### `MaxConcurrencyPercentage`<sup>Required</sup> <a name="MaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage"></a>

```csharp
public double MaxConcurrencyPercentage { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue"></a>

```csharp
public ServicecatalogProvisionedProductStackSetProvisioningPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---


### ServicecatalogProvisionedProductTimeoutsOutputReference <a name="ServicecatalogProvisionedProductTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogProvisionedProductTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



