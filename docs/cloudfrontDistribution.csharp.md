# `cloudfrontDistribution` Submodule <a name="`cloudfrontDistribution` Submodule" id="@cdktf/provider-aws.cloudfrontDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistribution <a name="CloudfrontDistribution" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution aws_cloudfront_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistribution(Construct Scope, string Id, CloudfrontDistributionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig">CloudfrontDistributionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig">CloudfrontDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse">PutCustomErrorResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior">PutDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior">PutOrderedCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup">PutOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate">PutViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse">ResetCustomErrorResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject">ResetDefaultRootObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion">ResetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled">ResetIsIpv6Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior">ResetOrderedCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup">ResetOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass">ResetPriceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete">ResetRetainOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment">ResetWaitForDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId">ResetWebAclId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCustomErrorResponse` <a name="PutCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse"></a>

```csharp
private void PutCustomErrorResponse(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultCacheBehavior` <a name="PutDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior"></a>

```csharp
private void PutDefaultCacheBehavior(CloudfrontDistributionDefaultCacheBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(CloudfrontDistributionLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `PutOrderedCacheBehavior` <a name="PutOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior"></a>

```csharp
private void PutOrderedCacheBehavior(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior.parameter.value"></a>

- *Type:* object

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin"></a>

```csharp
private void PutOrigin(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin.parameter.value"></a>

- *Type:* object

---

##### `PutOriginGroup` <a name="PutOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup"></a>

```csharp
private void PutOriginGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup.parameter.value"></a>

- *Type:* object

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions"></a>

```csharp
private void PutRestrictions(CloudfrontDistributionRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `PutViewerCertificate` <a name="PutViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate"></a>

```csharp
private void PutViewerCertificate(CloudfrontDistributionViewerCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCustomErrorResponse` <a name="ResetCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse"></a>

```csharp
private void ResetCustomErrorResponse()
```

##### `ResetDefaultRootObject` <a name="ResetDefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject"></a>

```csharp
private void ResetDefaultRootObject()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion"></a>

```csharp
private void ResetHttpVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsIpv6Enabled` <a name="ResetIsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled"></a>

```csharp
private void ResetIsIpv6Enabled()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetOrderedCacheBehavior` <a name="ResetOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior"></a>

```csharp
private void ResetOrderedCacheBehavior()
```

##### `ResetOriginGroup` <a name="ResetOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup"></a>

```csharp
private void ResetOriginGroup()
```

##### `ResetPriceClass` <a name="ResetPriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass"></a>

```csharp
private void ResetPriceClass()
```

##### `ResetRetainOnDelete` <a name="ResetRetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete"></a>

```csharp
private void ResetRetainOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWaitForDeployment` <a name="ResetWaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment"></a>

```csharp
private void ResetWaitForDeployment()
```

##### `ResetWebAclId` <a name="ResetWebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId"></a>

```csharp
private void ResetWebAclId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontDistribution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontDistribution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontDistribution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference">CallerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse">CustomErrorResponse</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches">InProgressValidationBatches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior">OrderedCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners">TrustedSigners</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate">ViewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput">CustomErrorResponseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput">DefaultCacheBehaviorInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput">DefaultRootObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput">HttpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput">IsIpv6EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput">OrderedCacheBehaviorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput">OriginGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput">OriginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput">PriceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput">RetainOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput">ViewerCertificateInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput">WaitForDeploymentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput">WebAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject">DefaultRootObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion">HttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass">PriceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete">RetainOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment">WaitForDeployment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId">WebAclId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference"></a>

```csharp
public string CallerReference { get; }
```

- *Type:* string

---

##### `CustomErrorResponse`<sup>Required</sup> <a name="CustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse"></a>

```csharp
public CloudfrontDistributionCustomErrorResponseList CustomErrorResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a>

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorOutputReference DefaultCacheBehavior { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InProgressValidationBatches`<sup>Required</sup> <a name="InProgressValidationBatches" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches"></a>

```csharp
public double InProgressValidationBatches { get; }
```

- *Type:* double

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig"></a>

```csharp
public CloudfrontDistributionLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a>

---

##### `OrderedCacheBehavior`<sup>Required</sup> <a name="OrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorList OrderedCacheBehavior { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin"></a>

```csharp
public CloudfrontDistributionOriginList Origin { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a>

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup"></a>

```csharp
public CloudfrontDistributionOriginGroupList OriginGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a>

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions"></a>

```csharp
public CloudfrontDistributionRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups"></a>

```csharp
public CloudfrontDistributionTrustedKeyGroupsList TrustedKeyGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a>

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners"></a>

```csharp
public CloudfrontDistributionTrustedSignersList TrustedSigners { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a>

---

##### `ViewerCertificate`<sup>Required</sup> <a name="ViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate"></a>

```csharp
public CloudfrontDistributionViewerCertificateOutputReference ViewerCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a>

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CustomErrorResponseInput`<sup>Optional</sup> <a name="CustomErrorResponseInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput"></a>

```csharp
public object CustomErrorResponseInput { get; }
```

- *Type:* object

---

##### `DefaultCacheBehaviorInput`<sup>Optional</sup> <a name="DefaultCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehavior DefaultCacheBehaviorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `DefaultRootObjectInput`<sup>Optional</sup> <a name="DefaultRootObjectInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput"></a>

```csharp
public string DefaultRootObjectInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput"></a>

```csharp
public string HttpVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsIpv6EnabledInput`<sup>Optional</sup> <a name="IsIpv6EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput"></a>

```csharp
public object IsIpv6EnabledInput { get; }
```

- *Type:* object

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput"></a>

```csharp
public CloudfrontDistributionLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `OrderedCacheBehaviorInput`<sup>Optional</sup> <a name="OrderedCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput"></a>

```csharp
public object OrderedCacheBehaviorInput { get; }
```

- *Type:* object

---

##### `OriginGroupInput`<sup>Optional</sup> <a name="OriginGroupInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput"></a>

```csharp
public object OriginGroupInput { get; }
```

- *Type:* object

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput"></a>

```csharp
public object OriginInput { get; }
```

- *Type:* object

---

##### `PriceClassInput`<sup>Optional</sup> <a name="PriceClassInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput"></a>

```csharp
public string PriceClassInput { get; }
```

- *Type:* string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput"></a>

```csharp
public CloudfrontDistributionRestrictions RestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `RetainOnDeleteInput`<sup>Optional</sup> <a name="RetainOnDeleteInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput"></a>

```csharp
public object RetainOnDeleteInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ViewerCertificateInput`<sup>Optional</sup> <a name="ViewerCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput"></a>

```csharp
public CloudfrontDistributionViewerCertificate ViewerCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `WaitForDeploymentInput`<sup>Optional</sup> <a name="WaitForDeploymentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput"></a>

```csharp
public object WaitForDeploymentInput { get; }
```

- *Type:* object

---

##### `WebAclIdInput`<sup>Optional</sup> <a name="WebAclIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput"></a>

```csharp
public string WebAclIdInput { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DefaultRootObject`<sup>Required</sup> <a name="DefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject"></a>

```csharp
public string DefaultRootObject { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion"></a>

```csharp
public string HttpVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIpv6Enabled`<sup>Required</sup> <a name="IsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled"></a>

```csharp
public object IsIpv6Enabled { get; }
```

- *Type:* object

---

##### `PriceClass`<sup>Required</sup> <a name="PriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass"></a>

```csharp
public string PriceClass { get; }
```

- *Type:* string

---

##### `RetainOnDelete`<sup>Required</sup> <a name="RetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete"></a>

```csharp
public object RetainOnDelete { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WaitForDeployment`<sup>Required</sup> <a name="WaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment"></a>

```csharp
public object WaitForDeployment { get; }
```

- *Type:* object

---

##### `WebAclId`<sup>Required</sup> <a name="WebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId"></a>

```csharp
public string WebAclId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionConfig <a name="CloudfrontDistributionConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudfrontDistributionDefaultCacheBehavior DefaultCacheBehavior,
    object Enabled,
    object Origin,
    CloudfrontDistributionRestrictions Restrictions,
    CloudfrontDistributionViewerCertificate ViewerCertificate,
    string[] Aliases = null,
    string Comment = null,
    object CustomErrorResponse = null,
    string DefaultRootObject = null,
    string HttpVersion = null,
    string Id = null,
    object IsIpv6Enabled = null,
    CloudfrontDistributionLoggingConfig LoggingConfig = null,
    object OrderedCacheBehavior = null,
    object OriginGroup = null,
    string PriceClass = null,
    object RetainOnDelete = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object WaitForDeployment = null,
    string WebAclId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin">Origin</a></code> | <code>object</code> | origin block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate">ViewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | viewer_certificate block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases">Aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse">CustomErrorResponse</a></code> | <code>object</code> | custom_error_response block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject">DefaultRootObject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion">HttpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior">OrderedCacheBehavior</a></code> | <code>object</code> | ordered_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup">OriginGroup</a></code> | <code>object</code> | origin_group block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass">PriceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete">RetainOnDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment">WaitForDeployment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId">WebAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehavior DefaultCacheBehavior { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin"></a>

```csharp
public object Origin { get; set; }
```

- *Type:* object

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin CloudfrontDistribution#origin}

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions"></a>

```csharp
public CloudfrontDistributionRestrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}

---

##### `ViewerCertificate`<sup>Required</sup> <a name="ViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate"></a>

```csharp
public CloudfrontDistributionViewerCertificate ViewerCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

viewer_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}.

---

##### `CustomErrorResponse`<sup>Optional</sup> <a name="CustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse"></a>

```csharp
public object CustomErrorResponse { get; set; }
```

- *Type:* object

custom_error_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}

---

##### `DefaultRootObject`<sup>Optional</sup> <a name="DefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject"></a>

```csharp
public string DefaultRootObject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}.

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion"></a>

```csharp
public string HttpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIpv6Enabled`<sup>Optional</sup> <a name="IsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled"></a>

```csharp
public object IsIpv6Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig"></a>

```csharp
public CloudfrontDistributionLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}

---

##### `OrderedCacheBehavior`<sup>Optional</sup> <a name="OrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior"></a>

```csharp
public object OrderedCacheBehavior { get; set; }
```

- *Type:* object

ordered_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}

---

##### `OriginGroup`<sup>Optional</sup> <a name="OriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup"></a>

```csharp
public object OriginGroup { get; set; }
```

- *Type:* object

origin_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}

---

##### `PriceClass`<sup>Optional</sup> <a name="PriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass"></a>

```csharp
public string PriceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}.

---

##### `RetainOnDelete`<sup>Optional</sup> <a name="RetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete"></a>

```csharp
public object RetainOnDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}.

---

##### `WaitForDeployment`<sup>Optional</sup> <a name="WaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment"></a>

```csharp
public object WaitForDeployment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.

---

##### `WebAclId`<sup>Optional</sup> <a name="WebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId"></a>

```csharp
public string WebAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}.

---

### CloudfrontDistributionCustomErrorResponse <a name="CloudfrontDistributionCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionCustomErrorResponse {
    double ErrorCode,
    double ErrorCachingMinTtl = null,
    double ResponseCode = null,
    string ResponsePagePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode">ErrorCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl">ErrorCachingMinTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode">ResponseCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath">ResponsePagePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}. |

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode"></a>

```csharp
public double ErrorCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}.

---

##### `ErrorCachingMinTtl`<sup>Optional</sup> <a name="ErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl"></a>

```csharp
public double ErrorCachingMinTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}.

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}.

---

##### `ResponsePagePath`<sup>Optional</sup> <a name="ResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath"></a>

```csharp
public string ResponsePagePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}.

---

### CloudfrontDistributionDefaultCacheBehavior <a name="CloudfrontDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehavior {
    string[] AllowedMethods,
    string[] CachedMethods,
    string TargetOriginId,
    string ViewerProtocolPolicy,
    string CachePolicyId = null,
    object Compress = null,
    double DefaultTtl = null,
    string FieldLevelEncryptionId = null,
    CloudfrontDistributionDefaultCacheBehaviorForwardedValues ForwardedValues = null,
    object FunctionAssociation = null,
    object LambdaFunctionAssociation = null,
    double MaxTtl = null,
    double MinTtl = null,
    string OriginRequestPolicyId = null,
    string RealtimeLogConfigArn = null,
    string ResponseHeadersPolicyId = null,
    object SmoothStreaming = null,
    string[] TrustedKeyGroups = null,
    string[] TrustedSigners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods">CachedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId">TargetOriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId">CachePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress">Compress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation">FunctionAssociation</a></code> | <code>object</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code>object</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl">MinTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming">SmoothStreaming</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners">TrustedSigners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods"></a>

```csharp
public string[] CachedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId"></a>

```csharp
public string TargetOriginId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy"></a>

```csharp
public string ViewerProtocolPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `CachePolicyId`<sup>Optional</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId"></a>

```csharp
public string CachePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `Compress`<sup>Optional</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress"></a>

```csharp
public object Compress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `FieldLevelEncryptionId`<sup>Optional</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId"></a>

```csharp
public string FieldLevelEncryptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `ForwardedValues`<sup>Optional</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValues ForwardedValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `FunctionAssociation`<sup>Optional</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation"></a>

```csharp
public object FunctionAssociation { get; set; }
```

- *Type:* object

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `LambdaFunctionAssociation`<sup>Optional</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation"></a>

```csharp
public object LambdaFunctionAssociation { get; set; }
```

- *Type:* object

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `MinTtl`<sup>Optional</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl"></a>

```csharp
public double MinTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `OriginRequestPolicyId`<sup>Optional</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId"></a>

```csharp
public string OriginRequestPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `RealtimeLogConfigArn`<sup>Optional</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn"></a>

```csharp
public string RealtimeLogConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `ResponseHeadersPolicyId`<sup>Optional</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId"></a>

```csharp
public string ResponseHeadersPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `SmoothStreaming`<sup>Optional</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming"></a>

```csharp
public object SmoothStreaming { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `TrustedKeyGroups`<sup>Optional</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups"></a>

```csharp
public string[] TrustedKeyGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `TrustedSigners`<sup>Optional</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners"></a>

```csharp
public string[] TrustedSigners { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValues <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
    CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies Cookies,
    object QueryString,
    string[] Headers = null,
    string[] QueryStringCacheKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString">QueryString</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers">Headers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies Cookies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString"></a>

```csharp
public object QueryString { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers"></a>

```csharp
public string[] Headers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `QueryStringCacheKeys`<sup>Optional</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```csharp
public string[] QueryStringCacheKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
    string Forward,
    string[] WhitelistedNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward">Forward</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames">WhitelistedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward"></a>

```csharp
public string Forward { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `WhitelistedNames`<sup>Optional</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```csharp
public string[] WhitelistedNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
    string EventType,
    string FunctionArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
    string EventType,
    string LambdaArn,
    object IncludeBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody">IncludeBody</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `IncludeBody`<sup>Optional</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```csharp
public object IncludeBody { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionLoggingConfig <a name="CloudfrontDistributionLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionLoggingConfig {
    string Bucket,
    object IncludeCookies = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies">IncludeCookies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}.

---

##### `IncludeCookies`<sup>Optional</sup> <a name="IncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies"></a>

```csharp
public object IncludeCookies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}.

---

### CloudfrontDistributionOrderedCacheBehavior <a name="CloudfrontDistributionOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehavior {
    string[] AllowedMethods,
    string[] CachedMethods,
    string PathPattern,
    string TargetOriginId,
    string ViewerProtocolPolicy,
    string CachePolicyId = null,
    object Compress = null,
    double DefaultTtl = null,
    string FieldLevelEncryptionId = null,
    CloudfrontDistributionOrderedCacheBehaviorForwardedValues ForwardedValues = null,
    object FunctionAssociation = null,
    object LambdaFunctionAssociation = null,
    double MaxTtl = null,
    double MinTtl = null,
    string OriginRequestPolicyId = null,
    string RealtimeLogConfigArn = null,
    string ResponseHeadersPolicyId = null,
    object SmoothStreaming = null,
    string[] TrustedKeyGroups = null,
    string[] TrustedSigners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods">CachedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern">PathPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId">TargetOriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId">CachePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress">Compress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation">FunctionAssociation</a></code> | <code>object</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code>object</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl">MinTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming">SmoothStreaming</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners">TrustedSigners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods"></a>

```csharp
public string[] CachedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern"></a>

```csharp
public string PathPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}.

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId"></a>

```csharp
public string TargetOriginId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy"></a>

```csharp
public string ViewerProtocolPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `CachePolicyId`<sup>Optional</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId"></a>

```csharp
public string CachePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `Compress`<sup>Optional</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress"></a>

```csharp
public object Compress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `FieldLevelEncryptionId`<sup>Optional</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId"></a>

```csharp
public string FieldLevelEncryptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `ForwardedValues`<sup>Optional</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValues ForwardedValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `FunctionAssociation`<sup>Optional</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation"></a>

```csharp
public object FunctionAssociation { get; set; }
```

- *Type:* object

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `LambdaFunctionAssociation`<sup>Optional</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation"></a>

```csharp
public object LambdaFunctionAssociation { get; set; }
```

- *Type:* object

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `MinTtl`<sup>Optional</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl"></a>

```csharp
public double MinTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `OriginRequestPolicyId`<sup>Optional</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId"></a>

```csharp
public string OriginRequestPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `RealtimeLogConfigArn`<sup>Optional</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn"></a>

```csharp
public string RealtimeLogConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `ResponseHeadersPolicyId`<sup>Optional</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId"></a>

```csharp
public string ResponseHeadersPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `SmoothStreaming`<sup>Optional</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming"></a>

```csharp
public object SmoothStreaming { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `TrustedKeyGroups`<sup>Optional</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups"></a>

```csharp
public string[] TrustedKeyGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `TrustedSigners`<sup>Optional</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners"></a>

```csharp
public string[] TrustedSigners { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValues <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
    CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies Cookies,
    object QueryString,
    string[] Headers = null,
    string[] QueryStringCacheKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString">QueryString</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers">Headers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies Cookies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString"></a>

```csharp
public object QueryString { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers"></a>

```csharp
public string[] Headers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `QueryStringCacheKeys`<sup>Optional</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```csharp
public string[] QueryStringCacheKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
    string Forward,
    string[] WhitelistedNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward">Forward</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames">WhitelistedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward"></a>

```csharp
public string Forward { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `WhitelistedNames`<sup>Optional</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```csharp
public string[] WhitelistedNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
    string EventType,
    string FunctionArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
    string EventType,
    string LambdaArn,
    object IncludeBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody">IncludeBody</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `IncludeBody`<sup>Optional</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```csharp
public object IncludeBody { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionOrigin <a name="CloudfrontDistributionOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrigin {
    string DomainName,
    string OriginId,
    double ConnectionAttempts = null,
    double ConnectionTimeout = null,
    object CustomHeader = null,
    CloudfrontDistributionOriginCustomOriginConfig CustomOriginConfig = null,
    string OriginAccessControlId = null,
    string OriginPath = null,
    CloudfrontDistributionOriginOriginShield OriginShield = null,
    CloudfrontDistributionOriginS3OriginConfig S3OriginConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId">OriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts">ConnectionAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader">CustomHeader</a></code> | <code>object</code> | custom_header block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig">CustomOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | custom_origin_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId">OriginAccessControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath">OriginPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield">OriginShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | origin_shield block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig">S3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | s3_origin_config block. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}.

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId"></a>

```csharp
public string OriginId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

##### `ConnectionAttempts`<sup>Optional</sup> <a name="ConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts"></a>

```csharp
public double ConnectionAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}.

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader"></a>

```csharp
public object CustomHeader { get; set; }
```

- *Type:* object

custom_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}

---

##### `CustomOriginConfig`<sup>Optional</sup> <a name="CustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig"></a>

```csharp
public CloudfrontDistributionOriginCustomOriginConfig CustomOriginConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

custom_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}

---

##### `OriginAccessControlId`<sup>Optional</sup> <a name="OriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId"></a>

```csharp
public string OriginAccessControlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}.

---

##### `OriginPath`<sup>Optional</sup> <a name="OriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath"></a>

```csharp
public string OriginPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}.

---

##### `OriginShield`<sup>Optional</sup> <a name="OriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield"></a>

```csharp
public CloudfrontDistributionOriginOriginShield OriginShield { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

origin_shield block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}

---

##### `S3OriginConfig`<sup>Optional</sup> <a name="S3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig"></a>

```csharp
public CloudfrontDistributionOriginS3OriginConfig S3OriginConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

s3_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}

---

### CloudfrontDistributionOriginCustomHeader <a name="CloudfrontDistributionOriginCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginCustomHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}.

---

### CloudfrontDistributionOriginCustomOriginConfig <a name="CloudfrontDistributionOriginCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginCustomOriginConfig {
    double HttpPort,
    double HttpsPort,
    string OriginProtocolPolicy,
    string[] OriginSslProtocols,
    double OriginKeepaliveTimeout = null,
    double OriginReadTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols">OriginSslProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout">OriginKeepaliveTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout">OriginReadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}. |

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}.

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy"></a>

```csharp
public string OriginProtocolPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols"></a>

```csharp
public string[] OriginSslProtocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.

---

##### `OriginKeepaliveTimeout`<sup>Optional</sup> <a name="OriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout"></a>

```csharp
public double OriginKeepaliveTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.

---

##### `OriginReadTimeout`<sup>Optional</sup> <a name="OriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout"></a>

```csharp
public double OriginReadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.

---

### CloudfrontDistributionOriginGroup <a name="CloudfrontDistributionOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroup {
    CloudfrontDistributionOriginGroupFailoverCriteria FailoverCriteria,
    object Member,
    string OriginId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria">FailoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | failover_criteria block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member">Member</a></code> | <code>object</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId">OriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `FailoverCriteria`<sup>Required</sup> <a name="FailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria"></a>

```csharp
public CloudfrontDistributionOriginGroupFailoverCriteria FailoverCriteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

failover_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member"></a>

```csharp
public object Member { get; set; }
```

- *Type:* object

member block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#member CloudfrontDistribution#member}

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId"></a>

```csharp
public string OriginId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginGroupFailoverCriteria <a name="CloudfrontDistributionOriginGroupFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupFailoverCriteria {
    double[] StatusCodes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes">StatusCodes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}. |

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes"></a>

```csharp
public double[] StatusCodes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}.

---

### CloudfrontDistributionOriginGroupMember <a name="CloudfrontDistributionOriginGroupMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupMember {
    string OriginId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId">OriginId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId"></a>

```csharp
public string OriginId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginOriginShield <a name="CloudfrontDistributionOriginOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginOriginShield {
    object Enabled,
    string OriginShieldRegion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion">OriginShieldRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `OriginShieldRegion`<sup>Required</sup> <a name="OriginShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion"></a>

```csharp
public string OriginShieldRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}.

---

### CloudfrontDistributionOriginS3OriginConfig <a name="CloudfrontDistributionOriginS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginS3OriginConfig {
    string OriginAccessIdentity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity">OriginAccessIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}. |

---

##### `OriginAccessIdentity`<sup>Required</sup> <a name="OriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity"></a>

```csharp
public string OriginAccessIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}.

---

### CloudfrontDistributionRestrictions <a name="CloudfrontDistributionRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionRestrictions {
    CloudfrontDistributionRestrictionsGeoRestriction GeoRestriction
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | geo_restriction block. |

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction"></a>

```csharp
public CloudfrontDistributionRestrictionsGeoRestriction GeoRestriction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

geo_restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}

---

### CloudfrontDistributionRestrictionsGeoRestriction <a name="CloudfrontDistributionRestrictionsGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionRestrictionsGeoRestriction {
    string RestrictionType,
    string[] Locations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType">RestrictionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations">Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}. |

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType"></a>

```csharp
public string RestrictionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}.

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}.

---

### CloudfrontDistributionTrustedKeyGroups <a name="CloudfrontDistributionTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroups {

};
```


### CloudfrontDistributionTrustedKeyGroupsItems <a name="CloudfrontDistributionTrustedKeyGroupsItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroupsItems {

};
```


### CloudfrontDistributionTrustedSigners <a name="CloudfrontDistributionTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSigners {

};
```


### CloudfrontDistributionTrustedSignersItems <a name="CloudfrontDistributionTrustedSignersItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSignersItems {

};
```


### CloudfrontDistributionViewerCertificate <a name="CloudfrontDistributionViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionViewerCertificate {
    string AcmCertificateArn = null,
    object CloudfrontDefaultCertificate = null,
    string IamCertificateId = null,
    string MinimumProtocolVersion = null,
    string SslSupportMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate">CloudfrontDefaultCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId">IamCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion">MinimumProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod">SslSupportMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}. |

---

##### `AcmCertificateArn`<sup>Optional</sup> <a name="AcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn"></a>

```csharp
public string AcmCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.

---

##### `CloudfrontDefaultCertificate`<sup>Optional</sup> <a name="CloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate"></a>

```csharp
public object CloudfrontDefaultCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.

---

##### `IamCertificateId`<sup>Optional</sup> <a name="IamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId"></a>

```csharp
public string IamCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.

---

##### `MinimumProtocolVersion`<sup>Optional</sup> <a name="MinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion"></a>

```csharp
public string MinimumProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.

---

##### `SslSupportMethod`<sup>Optional</sup> <a name="SslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod"></a>

```csharp
public string SslSupportMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionCustomErrorResponseList <a name="CloudfrontDistributionCustomErrorResponseList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionCustomErrorResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get"></a>

```csharp
private CloudfrontDistributionCustomErrorResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionCustomErrorResponseOutputReference <a name="CloudfrontDistributionCustomErrorResponseOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionCustomErrorResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl">ResetErrorCachingMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath">ResetResponsePagePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorCachingMinTtl` <a name="ResetErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl"></a>

```csharp
private void ResetErrorCachingMinTtl()
```

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode"></a>

```csharp
private void ResetResponseCode()
```

##### `ResetResponsePagePath` <a name="ResetResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath"></a>

```csharp
private void ResetResponsePagePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput">ErrorCachingMinTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput">ErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput">ResponsePagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl">ErrorCachingMinTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode">ErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath">ResponsePagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorCachingMinTtlInput`<sup>Optional</sup> <a name="ErrorCachingMinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput"></a>

```csharp
public double ErrorCachingMinTtlInput { get; }
```

- *Type:* double

---

##### `ErrorCodeInput`<sup>Optional</sup> <a name="ErrorCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput"></a>

```csharp
public double ErrorCodeInput { get; }
```

- *Type:* double

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponsePagePathInput`<sup>Optional</sup> <a name="ResponsePagePathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput"></a>

```csharp
public string ResponsePagePathInput { get; }
```

- *Type:* string

---

##### `ErrorCachingMinTtl`<sup>Required</sup> <a name="ErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl"></a>

```csharp
public double ErrorCachingMinTtl { get; }
```

- *Type:* double

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode"></a>

```csharp
public double ErrorCode { get; }
```

- *Type:* double

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `ResponsePagePath`<sup>Required</sup> <a name="ResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath"></a>

```csharp
public string ResponsePagePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">ResetWhitelistedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWhitelistedNames` <a name="ResetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```csharp
private void ResetWhitelistedNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">ForwardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">WhitelistedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">Forward</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">WhitelistedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```csharp
public string ForwardInput { get; }
```

- *Type:* string

---

##### `WhitelistedNamesInput`<sup>Optional</sup> <a name="WhitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```csharp
public string[] WhitelistedNamesInput { get; }
```

- *Type:* string[]

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```csharp
public string Forward { get; }
```

- *Type:* string

---

##### `WhitelistedNames`<sup>Required</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```csharp
public string[] WhitelistedNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies">PutCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">ResetQueryStringCacheKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```csharp
private void PutCookies(CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryStringCacheKeys` <a name="ResetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```csharp
private void ResetQueryStringCacheKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput">HeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">QueryStringCacheKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString">QueryString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference Cookies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies CookiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```csharp
public string[] HeadersInput { get; }
```

- *Type:* string[]

---

##### `QueryStringCacheKeysInput`<sup>Optional</sup> <a name="QueryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```csharp
public string[] QueryStringCacheKeysInput { get; }
```

- *Type:* string[]

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```csharp
public object QueryStringInput { get; }
```

- *Type:* object

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```csharp
public object QueryString { get; }
```

- *Type:* object

---

##### `QueryStringCacheKeys`<sup>Required</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```csharp
public string[] QueryStringCacheKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get"></a>

```csharp
private CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get"></a>

```csharp
private CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">ResetIncludeBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeBody` <a name="ResetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```csharp
private void ResetIncludeBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">IncludeBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">IncludeBody</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `IncludeBodyInput`<sup>Optional</sup> <a name="IncludeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```csharp
public object IncludeBodyInput { get; }
```

- *Type:* object

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `IncludeBody`<sup>Required</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```csharp
public object IncludeBody { get; }
```

- *Type:* object

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionDefaultCacheBehaviorOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionDefaultCacheBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues">PutForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation">PutFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation">PutLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId">ResetCachePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress">ResetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId">ResetFieldLevelEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues">ResetForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation">ResetFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation">ResetLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl">ResetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId">ResetOriginRequestPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn">ResetRealtimeLogConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId">ResetResponseHeadersPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming">ResetSmoothStreaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups">ResetTrustedKeyGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners">ResetTrustedSigners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedValues` <a name="PutForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues"></a>

```csharp
private void PutForwardedValues(CloudfrontDistributionDefaultCacheBehaviorForwardedValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `PutFunctionAssociation` <a name="PutFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation"></a>

```csharp
private void PutFunctionAssociation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* object

---

##### `PutLambdaFunctionAssociation` <a name="PutLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```csharp
private void PutLambdaFunctionAssociation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* object

---

##### `ResetCachePolicyId` <a name="ResetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId"></a>

```csharp
private void ResetCachePolicyId()
```

##### `ResetCompress` <a name="ResetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress"></a>

```csharp
private void ResetCompress()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetFieldLevelEncryptionId` <a name="ResetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```csharp
private void ResetFieldLevelEncryptionId()
```

##### `ResetForwardedValues` <a name="ResetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues"></a>

```csharp
private void ResetForwardedValues()
```

##### `ResetFunctionAssociation` <a name="ResetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```csharp
private void ResetFunctionAssociation()
```

##### `ResetLambdaFunctionAssociation` <a name="ResetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```csharp
private void ResetLambdaFunctionAssociation()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMinTtl` <a name="ResetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl"></a>

```csharp
private void ResetMinTtl()
```

##### `ResetOriginRequestPolicyId` <a name="ResetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```csharp
private void ResetOriginRequestPolicyId()
```

##### `ResetRealtimeLogConfigArn` <a name="ResetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```csharp
private void ResetRealtimeLogConfigArn()
```

##### `ResetResponseHeadersPolicyId` <a name="ResetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```csharp
private void ResetResponseHeadersPolicyId()
```

##### `ResetSmoothStreaming` <a name="ResetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```csharp
private void ResetSmoothStreaming()
```

##### `ResetTrustedKeyGroups` <a name="ResetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```csharp
private void ResetTrustedKeyGroups()
```

##### `ResetTrustedSigners` <a name="ResetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners"></a>

```csharp
private void ResetTrustedSigners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation">FunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput">CachedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput">CachePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput">CompressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">FieldLevelEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput">ForwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput">FunctionAssociationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">LambdaFunctionAssociationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput">OriginRequestPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">RealtimeLogConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">ResponseHeadersPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput">SmoothStreamingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput">TargetOriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput">TrustedKeyGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput">TrustedSignersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">ViewerProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods">CachedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId">CachePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress">Compress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl">MinTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming">SmoothStreaming</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId">TargetOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners">TrustedSigners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardedValues`<sup>Required</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference ForwardedValues { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a>

---

##### `FunctionAssociation`<sup>Required</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList FunctionAssociation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a>

---

##### `LambdaFunctionAssociation`<sup>Required</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList LambdaFunctionAssociation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `CachedMethodsInput`<sup>Optional</sup> <a name="CachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```csharp
public string[] CachedMethodsInput { get; }
```

- *Type:* string[]

---

##### `CachePolicyIdInput`<sup>Optional</sup> <a name="CachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```csharp
public string CachePolicyIdInput { get; }
```

- *Type:* string

---

##### `CompressInput`<sup>Optional</sup> <a name="CompressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput"></a>

```csharp
public object CompressInput { get; }
```

- *Type:* object

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `FieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="FieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```csharp
public string FieldLevelEncryptionIdInput { get; }
```

- *Type:* string

---

##### `ForwardedValuesInput`<sup>Optional</sup> <a name="ForwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehaviorForwardedValues ForwardedValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `FunctionAssociationInput`<sup>Optional</sup> <a name="FunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```csharp
public object FunctionAssociationInput { get; }
```

- *Type:* object

---

##### `LambdaFunctionAssociationInput`<sup>Optional</sup> <a name="LambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```csharp
public object LambdaFunctionAssociationInput { get; }
```

- *Type:* object

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput"></a>

```csharp
public double MinTtlInput { get; }
```

- *Type:* double

---

##### `OriginRequestPolicyIdInput`<sup>Optional</sup> <a name="OriginRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```csharp
public string OriginRequestPolicyIdInput { get; }
```

- *Type:* string

---

##### `RealtimeLogConfigArnInput`<sup>Optional</sup> <a name="RealtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```csharp
public string RealtimeLogConfigArnInput { get; }
```

- *Type:* string

---

##### `ResponseHeadersPolicyIdInput`<sup>Optional</sup> <a name="ResponseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```csharp
public string ResponseHeadersPolicyIdInput { get; }
```

- *Type:* string

---

##### `SmoothStreamingInput`<sup>Optional</sup> <a name="SmoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```csharp
public object SmoothStreamingInput { get; }
```

- *Type:* object

---

##### `TargetOriginIdInput`<sup>Optional</sup> <a name="TargetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```csharp
public string TargetOriginIdInput { get; }
```

- *Type:* string

---

##### `TrustedKeyGroupsInput`<sup>Optional</sup> <a name="TrustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```csharp
public string[] TrustedKeyGroupsInput { get; }
```

- *Type:* string[]

---

##### `TrustedSignersInput`<sup>Optional</sup> <a name="TrustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```csharp
public string[] TrustedSignersInput { get; }
```

- *Type:* string[]

---

##### `ViewerProtocolPolicyInput`<sup>Optional</sup> <a name="ViewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```csharp
public string ViewerProtocolPolicyInput { get; }
```

- *Type:* string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods"></a>

```csharp
public string[] CachedMethods { get; }
```

- *Type:* string[]

---

##### `CachePolicyId`<sup>Required</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId"></a>

```csharp
public string CachePolicyId { get; }
```

- *Type:* string

---

##### `Compress`<sup>Required</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress"></a>

```csharp
public object Compress { get; }
```

- *Type:* object

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `FieldLevelEncryptionId`<sup>Required</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```csharp
public string FieldLevelEncryptionId { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl"></a>

```csharp
public double MinTtl { get; }
```

- *Type:* double

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```csharp
public string OriginRequestPolicyId { get; }
```

- *Type:* string

---

##### `RealtimeLogConfigArn`<sup>Required</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```csharp
public string RealtimeLogConfigArn { get; }
```

- *Type:* string

---

##### `ResponseHeadersPolicyId`<sup>Required</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```csharp
public string ResponseHeadersPolicyId { get; }
```

- *Type:* string

---

##### `SmoothStreaming`<sup>Required</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming"></a>

```csharp
public object SmoothStreaming { get; }
```

- *Type:* object

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId"></a>

```csharp
public string TargetOriginId { get; }
```

- *Type:* string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```csharp
public string[] TrustedKeyGroups { get; }
```

- *Type:* string[]

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners"></a>

```csharp
public string[] TrustedSigners { get; }
```

- *Type:* string[]

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```csharp
public string ViewerProtocolPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionDefaultCacheBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---


### CloudfrontDistributionLoggingConfigOutputReference <a name="CloudfrontDistributionLoggingConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies">ResetIncludeCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeCookies` <a name="ResetIncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies"></a>

```csharp
private void ResetIncludeCookies()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput">IncludeCookiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies">IncludeCookies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IncludeCookiesInput`<sup>Optional</sup> <a name="IncludeCookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput"></a>

```csharp
public object IncludeCookiesInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `IncludeCookies`<sup>Required</sup> <a name="IncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies"></a>

```csharp
public object IncludeCookies { get; }
```

- *Type:* object

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">ResetWhitelistedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWhitelistedNames` <a name="ResetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```csharp
private void ResetWhitelistedNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">ForwardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">WhitelistedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">Forward</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">WhitelistedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```csharp
public string ForwardInput { get; }
```

- *Type:* string

---

##### `WhitelistedNamesInput`<sup>Optional</sup> <a name="WhitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```csharp
public string[] WhitelistedNamesInput { get; }
```

- *Type:* string[]

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```csharp
public string Forward { get; }
```

- *Type:* string

---

##### `WhitelistedNames`<sup>Required</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```csharp
public string[] WhitelistedNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies">PutCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">ResetQueryStringCacheKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```csharp
private void PutCookies(CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryStringCacheKeys` <a name="ResetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```csharp
private void ResetQueryStringCacheKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput">HeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">QueryStringCacheKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString">QueryString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference Cookies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies CookiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```csharp
public string[] HeadersInput { get; }
```

- *Type:* string[]

---

##### `QueryStringCacheKeysInput`<sup>Optional</sup> <a name="QueryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```csharp
public string[] QueryStringCacheKeysInput { get; }
```

- *Type:* string[]

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```csharp
public object QueryStringInput { get; }
```

- *Type:* object

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```csharp
public object QueryString { get; }
```

- *Type:* object

---

##### `QueryStringCacheKeys`<sup>Required</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```csharp
public string[] QueryStringCacheKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get"></a>

```csharp
private CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get"></a>

```csharp
private CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">ResetIncludeBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeBody` <a name="ResetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```csharp
private void ResetIncludeBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">IncludeBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">IncludeBody</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `IncludeBodyInput`<sup>Optional</sup> <a name="IncludeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```csharp
public object IncludeBodyInput { get; }
```

- *Type:* object

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `IncludeBody`<sup>Required</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```csharp
public object IncludeBody { get; }
```

- *Type:* object

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOrderedCacheBehaviorList <a name="CloudfrontDistributionOrderedCacheBehaviorList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get"></a>

```csharp
private CloudfrontDistributionOrderedCacheBehaviorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOrderedCacheBehaviorOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOrderedCacheBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues">PutForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation">PutFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation">PutLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId">ResetCachePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress">ResetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId">ResetFieldLevelEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues">ResetForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation">ResetFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation">ResetLambdaFunctionAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl">ResetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId">ResetOriginRequestPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn">ResetRealtimeLogConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId">ResetResponseHeadersPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming">ResetSmoothStreaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups">ResetTrustedKeyGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners">ResetTrustedSigners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedValues` <a name="PutForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues"></a>

```csharp
private void PutForwardedValues(CloudfrontDistributionOrderedCacheBehaviorForwardedValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `PutFunctionAssociation` <a name="PutFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation"></a>

```csharp
private void PutFunctionAssociation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* object

---

##### `PutLambdaFunctionAssociation` <a name="PutLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```csharp
private void PutLambdaFunctionAssociation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* object

---

##### `ResetCachePolicyId` <a name="ResetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId"></a>

```csharp
private void ResetCachePolicyId()
```

##### `ResetCompress` <a name="ResetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress"></a>

```csharp
private void ResetCompress()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetFieldLevelEncryptionId` <a name="ResetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```csharp
private void ResetFieldLevelEncryptionId()
```

##### `ResetForwardedValues` <a name="ResetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues"></a>

```csharp
private void ResetForwardedValues()
```

##### `ResetFunctionAssociation` <a name="ResetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```csharp
private void ResetFunctionAssociation()
```

##### `ResetLambdaFunctionAssociation` <a name="ResetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```csharp
private void ResetLambdaFunctionAssociation()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMinTtl` <a name="ResetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl"></a>

```csharp
private void ResetMinTtl()
```

##### `ResetOriginRequestPolicyId` <a name="ResetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```csharp
private void ResetOriginRequestPolicyId()
```

##### `ResetRealtimeLogConfigArn` <a name="ResetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```csharp
private void ResetRealtimeLogConfigArn()
```

##### `ResetResponseHeadersPolicyId` <a name="ResetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```csharp
private void ResetResponseHeadersPolicyId()
```

##### `ResetSmoothStreaming` <a name="ResetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```csharp
private void ResetSmoothStreaming()
```

##### `ResetTrustedKeyGroups` <a name="ResetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```csharp
private void ResetTrustedKeyGroups()
```

##### `ResetTrustedSigners` <a name="ResetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners"></a>

```csharp
private void ResetTrustedSigners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation">FunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput">CachedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput">CachePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput">CompressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">FieldLevelEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput">ForwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput">FunctionAssociationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">LambdaFunctionAssociationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput">OriginRequestPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput">PathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">RealtimeLogConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">ResponseHeadersPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput">SmoothStreamingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput">TargetOriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput">TrustedKeyGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput">TrustedSignersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">ViewerProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods">CachedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId">CachePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress">Compress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl">MinTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern">PathPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming">SmoothStreaming</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId">TargetOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners">TrustedSigners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardedValues`<sup>Required</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference ForwardedValues { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a>

---

##### `FunctionAssociation`<sup>Required</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList FunctionAssociation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a>

---

##### `LambdaFunctionAssociation`<sup>Required</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList LambdaFunctionAssociation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `CachedMethodsInput`<sup>Optional</sup> <a name="CachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```csharp
public string[] CachedMethodsInput { get; }
```

- *Type:* string[]

---

##### `CachePolicyIdInput`<sup>Optional</sup> <a name="CachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```csharp
public string CachePolicyIdInput { get; }
```

- *Type:* string

---

##### `CompressInput`<sup>Optional</sup> <a name="CompressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput"></a>

```csharp
public object CompressInput { get; }
```

- *Type:* object

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `FieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="FieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```csharp
public string FieldLevelEncryptionIdInput { get; }
```

- *Type:* string

---

##### `ForwardedValuesInput`<sup>Optional</sup> <a name="ForwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```csharp
public CloudfrontDistributionOrderedCacheBehaviorForwardedValues ForwardedValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `FunctionAssociationInput`<sup>Optional</sup> <a name="FunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```csharp
public object FunctionAssociationInput { get; }
```

- *Type:* object

---

##### `LambdaFunctionAssociationInput`<sup>Optional</sup> <a name="LambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```csharp
public object LambdaFunctionAssociationInput { get; }
```

- *Type:* object

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput"></a>

```csharp
public double MinTtlInput { get; }
```

- *Type:* double

---

##### `OriginRequestPolicyIdInput`<sup>Optional</sup> <a name="OriginRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```csharp
public string OriginRequestPolicyIdInput { get; }
```

- *Type:* string

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput"></a>

```csharp
public string PathPatternInput { get; }
```

- *Type:* string

---

##### `RealtimeLogConfigArnInput`<sup>Optional</sup> <a name="RealtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```csharp
public string RealtimeLogConfigArnInput { get; }
```

- *Type:* string

---

##### `ResponseHeadersPolicyIdInput`<sup>Optional</sup> <a name="ResponseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```csharp
public string ResponseHeadersPolicyIdInput { get; }
```

- *Type:* string

---

##### `SmoothStreamingInput`<sup>Optional</sup> <a name="SmoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```csharp
public object SmoothStreamingInput { get; }
```

- *Type:* object

---

##### `TargetOriginIdInput`<sup>Optional</sup> <a name="TargetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```csharp
public string TargetOriginIdInput { get; }
```

- *Type:* string

---

##### `TrustedKeyGroupsInput`<sup>Optional</sup> <a name="TrustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```csharp
public string[] TrustedKeyGroupsInput { get; }
```

- *Type:* string[]

---

##### `TrustedSignersInput`<sup>Optional</sup> <a name="TrustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```csharp
public string[] TrustedSignersInput { get; }
```

- *Type:* string[]

---

##### `ViewerProtocolPolicyInput`<sup>Optional</sup> <a name="ViewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```csharp
public string ViewerProtocolPolicyInput { get; }
```

- *Type:* string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods"></a>

```csharp
public string[] CachedMethods { get; }
```

- *Type:* string[]

---

##### `CachePolicyId`<sup>Required</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId"></a>

```csharp
public string CachePolicyId { get; }
```

- *Type:* string

---

##### `Compress`<sup>Required</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress"></a>

```csharp
public object Compress { get; }
```

- *Type:* object

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `FieldLevelEncryptionId`<sup>Required</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```csharp
public string FieldLevelEncryptionId { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl"></a>

```csharp
public double MinTtl { get; }
```

- *Type:* double

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```csharp
public string OriginRequestPolicyId { get; }
```

- *Type:* string

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern"></a>

```csharp
public string PathPattern { get; }
```

- *Type:* string

---

##### `RealtimeLogConfigArn`<sup>Required</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```csharp
public string RealtimeLogConfigArn { get; }
```

- *Type:* string

---

##### `ResponseHeadersPolicyId`<sup>Required</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```csharp
public string ResponseHeadersPolicyId { get; }
```

- *Type:* string

---

##### `SmoothStreaming`<sup>Required</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming"></a>

```csharp
public object SmoothStreaming { get; }
```

- *Type:* object

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId"></a>

```csharp
public string TargetOriginId { get; }
```

- *Type:* string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```csharp
public string[] TrustedKeyGroups { get; }
```

- *Type:* string[]

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners"></a>

```csharp
public string[] TrustedSigners { get; }
```

- *Type:* string[]

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```csharp
public string ViewerProtocolPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginCustomHeaderList <a name="CloudfrontDistributionOriginCustomHeaderList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginCustomHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get"></a>

```csharp
private CloudfrontDistributionOriginCustomHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginCustomHeaderOutputReference <a name="CloudfrontDistributionOriginCustomHeaderOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginCustomHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginCustomOriginConfigOutputReference <a name="CloudfrontDistributionOriginCustomOriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginCustomOriginConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout">ResetOriginKeepaliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout">ResetOriginReadTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOriginKeepaliveTimeout` <a name="ResetOriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout"></a>

```csharp
private void ResetOriginKeepaliveTimeout()
```

##### `ResetOriginReadTimeout` <a name="ResetOriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout"></a>

```csharp
private void ResetOriginReadTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput">OriginKeepaliveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput">OriginProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput">OriginReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput">OriginSslProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout">OriginKeepaliveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout">OriginReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols">OriginSslProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `OriginKeepaliveTimeoutInput`<sup>Optional</sup> <a name="OriginKeepaliveTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput"></a>

```csharp
public double OriginKeepaliveTimeoutInput { get; }
```

- *Type:* double

---

##### `OriginProtocolPolicyInput`<sup>Optional</sup> <a name="OriginProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput"></a>

```csharp
public string OriginProtocolPolicyInput { get; }
```

- *Type:* string

---

##### `OriginReadTimeoutInput`<sup>Optional</sup> <a name="OriginReadTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput"></a>

```csharp
public double OriginReadTimeoutInput { get; }
```

- *Type:* double

---

##### `OriginSslProtocolsInput`<sup>Optional</sup> <a name="OriginSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput"></a>

```csharp
public string[] OriginSslProtocolsInput { get; }
```

- *Type:* string[]

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `OriginKeepaliveTimeout`<sup>Required</sup> <a name="OriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout"></a>

```csharp
public double OriginKeepaliveTimeout { get; }
```

- *Type:* double

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy"></a>

```csharp
public string OriginProtocolPolicy { get; }
```

- *Type:* string

---

##### `OriginReadTimeout`<sup>Required</sup> <a name="OriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout"></a>

```csharp
public double OriginReadTimeout { get; }
```

- *Type:* double

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols"></a>

```csharp
public string[] OriginSslProtocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOriginCustomOriginConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---


### CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference <a name="CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes">StatusCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput"></a>

```csharp
public double[] StatusCodesInput { get; }
```

- *Type:* double[]

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes"></a>

```csharp
public double[] StatusCodes { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOriginGroupFailoverCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---


### CloudfrontDistributionOriginGroupList <a name="CloudfrontDistributionOriginGroupList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get"></a>

```csharp
private CloudfrontDistributionOriginGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginGroupMemberList <a name="CloudfrontDistributionOriginGroupMemberList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupMemberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get"></a>

```csharp
private CloudfrontDistributionOriginGroupMemberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginGroupMemberOutputReference <a name="CloudfrontDistributionOriginGroupMemberOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupMemberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId">OriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput"></a>

```csharp
public string OriginIdInput { get; }
```

- *Type:* string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId"></a>

```csharp
public string OriginId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginGroupOutputReference <a name="CloudfrontDistributionOriginGroupOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria">PutFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember">PutMember</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailoverCriteria` <a name="PutFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria"></a>

```csharp
private void PutFailoverCriteria(CloudfrontDistributionOriginGroupFailoverCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `PutMember` <a name="PutMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember"></a>

```csharp
private void PutMember(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria">FailoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member">Member</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput">FailoverCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput">MemberInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId">OriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverCriteria`<sup>Required</sup> <a name="FailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria"></a>

```csharp
public CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference FailoverCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a>

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member"></a>

```csharp
public CloudfrontDistributionOriginGroupMemberList Member { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a>

---

##### `FailoverCriteriaInput`<sup>Optional</sup> <a name="FailoverCriteriaInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput"></a>

```csharp
public CloudfrontDistributionOriginGroupFailoverCriteria FailoverCriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput"></a>

```csharp
public object MemberInput { get; }
```

- *Type:* object

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput"></a>

```csharp
public string OriginIdInput { get; }
```

- *Type:* string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId"></a>

```csharp
public string OriginId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginList <a name="CloudfrontDistributionOriginList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get"></a>

```csharp
private CloudfrontDistributionOriginOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginOriginShieldOutputReference <a name="CloudfrontDistributionOriginOriginShieldOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginOriginShieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput">OriginShieldRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion">OriginShieldRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `OriginShieldRegionInput`<sup>Optional</sup> <a name="OriginShieldRegionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput"></a>

```csharp
public string OriginShieldRegionInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `OriginShieldRegion`<sup>Required</sup> <a name="OriginShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion"></a>

```csharp
public string OriginShieldRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOriginOriginShield InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---


### CloudfrontDistributionOriginOutputReference <a name="CloudfrontDistributionOriginOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig">PutCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield">PutOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig">PutS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts">ResetConnectionAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig">ResetCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId">ResetOriginAccessControlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath">ResetOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield">ResetOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig">ResetS3OriginConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader"></a>

```csharp
private void PutCustomHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* object

---

##### `PutCustomOriginConfig` <a name="PutCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig"></a>

```csharp
private void PutCustomOriginConfig(CloudfrontDistributionOriginCustomOriginConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `PutOriginShield` <a name="PutOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield"></a>

```csharp
private void PutOriginShield(CloudfrontDistributionOriginOriginShield Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `PutS3OriginConfig` <a name="PutS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig"></a>

```csharp
private void PutS3OriginConfig(CloudfrontDistributionOriginS3OriginConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `ResetConnectionAttempts` <a name="ResetConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts"></a>

```csharp
private void ResetConnectionAttempts()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader"></a>

```csharp
private void ResetCustomHeader()
```

##### `ResetCustomOriginConfig` <a name="ResetCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig"></a>

```csharp
private void ResetCustomOriginConfig()
```

##### `ResetOriginAccessControlId` <a name="ResetOriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId"></a>

```csharp
private void ResetOriginAccessControlId()
```

##### `ResetOriginPath` <a name="ResetOriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath"></a>

```csharp
private void ResetOriginPath()
```

##### `ResetOriginShield` <a name="ResetOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield"></a>

```csharp
private void ResetOriginShield()
```

##### `ResetS3OriginConfig` <a name="ResetS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig"></a>

```csharp
private void ResetS3OriginConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig">CustomOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield">OriginShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig">S3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput">ConnectionAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput">CustomHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput">CustomOriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput">OriginAccessControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput">OriginPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput">OriginShieldInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput">S3OriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts">ConnectionAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId">OriginAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId">OriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath">OriginPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader"></a>

```csharp
public CloudfrontDistributionOriginCustomHeaderList CustomHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a>

---

##### `CustomOriginConfig`<sup>Required</sup> <a name="CustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig"></a>

```csharp
public CloudfrontDistributionOriginCustomOriginConfigOutputReference CustomOriginConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a>

---

##### `OriginShield`<sup>Required</sup> <a name="OriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield"></a>

```csharp
public CloudfrontDistributionOriginOriginShieldOutputReference OriginShield { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a>

---

##### `S3OriginConfig`<sup>Required</sup> <a name="S3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig"></a>

```csharp
public CloudfrontDistributionOriginS3OriginConfigOutputReference S3OriginConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a>

---

##### `ConnectionAttemptsInput`<sup>Optional</sup> <a name="ConnectionAttemptsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput"></a>

```csharp
public double ConnectionAttemptsInput { get; }
```

- *Type:* double

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput"></a>

```csharp
public object CustomHeaderInput { get; }
```

- *Type:* object

---

##### `CustomOriginConfigInput`<sup>Optional</sup> <a name="CustomOriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput"></a>

```csharp
public CloudfrontDistributionOriginCustomOriginConfig CustomOriginConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `OriginAccessControlIdInput`<sup>Optional</sup> <a name="OriginAccessControlIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput"></a>

```csharp
public string OriginAccessControlIdInput { get; }
```

- *Type:* string

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput"></a>

```csharp
public string OriginIdInput { get; }
```

- *Type:* string

---

##### `OriginPathInput`<sup>Optional</sup> <a name="OriginPathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput"></a>

```csharp
public string OriginPathInput { get; }
```

- *Type:* string

---

##### `OriginShieldInput`<sup>Optional</sup> <a name="OriginShieldInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput"></a>

```csharp
public CloudfrontDistributionOriginOriginShield OriginShieldInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `S3OriginConfigInput`<sup>Optional</sup> <a name="S3OriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput"></a>

```csharp
public CloudfrontDistributionOriginS3OriginConfig S3OriginConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `ConnectionAttempts`<sup>Required</sup> <a name="ConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts"></a>

```csharp
public double ConnectionAttempts { get; }
```

- *Type:* double

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `OriginAccessControlId`<sup>Required</sup> <a name="OriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId"></a>

```csharp
public string OriginAccessControlId { get; }
```

- *Type:* string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId"></a>

```csharp
public string OriginId { get; }
```

- *Type:* string

---

##### `OriginPath`<sup>Required</sup> <a name="OriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath"></a>

```csharp
public string OriginPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontDistributionOriginS3OriginConfigOutputReference <a name="CloudfrontDistributionOriginS3OriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionOriginS3OriginConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput">OriginAccessIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity">OriginAccessIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginAccessIdentityInput`<sup>Optional</sup> <a name="OriginAccessIdentityInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput"></a>

```csharp
public string OriginAccessIdentityInput { get; }
```

- *Type:* string

---

##### `OriginAccessIdentity`<sup>Required</sup> <a name="OriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity"></a>

```csharp
public string OriginAccessIdentity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionOriginS3OriginConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---


### CloudfrontDistributionRestrictionsGeoRestrictionOutputReference <a name="CloudfrontDistributionRestrictionsGeoRestrictionOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput">RestrictionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType">RestrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `RestrictionTypeInput`<sup>Optional</sup> <a name="RestrictionTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```csharp
public string RestrictionTypeInput { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType"></a>

```csharp
public string RestrictionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionRestrictionsGeoRestriction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


### CloudfrontDistributionRestrictionsOutputReference <a name="CloudfrontDistributionRestrictionsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction">PutGeoRestriction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoRestriction` <a name="PutGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction"></a>

```csharp
private void PutGeoRestriction(CloudfrontDistributionRestrictionsGeoRestriction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput">GeoRestrictionInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction"></a>

```csharp
public CloudfrontDistributionRestrictionsGeoRestrictionOutputReference GeoRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a>

---

##### `GeoRestrictionInput`<sup>Optional</sup> <a name="GeoRestrictionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput"></a>

```csharp
public CloudfrontDistributionRestrictionsGeoRestriction GeoRestrictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---


### CloudfrontDistributionTrustedKeyGroupsItemsList <a name="CloudfrontDistributionTrustedKeyGroupsItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroupsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get"></a>

```csharp
private CloudfrontDistributionTrustedKeyGroupsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudfrontDistributionTrustedKeyGroupsItemsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroupsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId">KeyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds">KeyPairIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyGroupId`<sup>Required</sup> <a name="KeyGroupId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId"></a>

```csharp
public string KeyGroupId { get; }
```

- *Type:* string

---

##### `KeyPairIds`<sup>Required</sup> <a name="KeyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds"></a>

```csharp
public string[] KeyPairIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionTrustedKeyGroupsItems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a>

---


### CloudfrontDistributionTrustedKeyGroupsList <a name="CloudfrontDistributionTrustedKeyGroupsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get"></a>

```csharp
private CloudfrontDistributionTrustedKeyGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudfrontDistributionTrustedKeyGroupsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedKeyGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items"></a>

```csharp
public CloudfrontDistributionTrustedKeyGroupsItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionTrustedKeyGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a>

---


### CloudfrontDistributionTrustedSignersItemsList <a name="CloudfrontDistributionTrustedSignersItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSignersItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get"></a>

```csharp
private CloudfrontDistributionTrustedSignersItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudfrontDistributionTrustedSignersItemsOutputReference <a name="CloudfrontDistributionTrustedSignersItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSignersItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber">AwsAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds">KeyPairIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountNumber`<sup>Required</sup> <a name="AwsAccountNumber" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber"></a>

```csharp
public string AwsAccountNumber { get; }
```

- *Type:* string

---

##### `KeyPairIds`<sup>Required</sup> <a name="KeyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds"></a>

```csharp
public string[] KeyPairIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionTrustedSignersItems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a>

---


### CloudfrontDistributionTrustedSignersList <a name="CloudfrontDistributionTrustedSignersList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSignersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get"></a>

```csharp
private CloudfrontDistributionTrustedSignersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudfrontDistributionTrustedSignersOutputReference <a name="CloudfrontDistributionTrustedSignersOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionTrustedSignersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items"></a>

```csharp
public CloudfrontDistributionTrustedSignersItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionTrustedSigners InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a>

---


### CloudfrontDistributionViewerCertificateOutputReference <a name="CloudfrontDistributionViewerCertificateOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontDistributionViewerCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn">ResetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate">ResetCloudfrontDefaultCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId">ResetIamCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion">ResetMinimumProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod">ResetSslSupportMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcmCertificateArn` <a name="ResetAcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn"></a>

```csharp
private void ResetAcmCertificateArn()
```

##### `ResetCloudfrontDefaultCertificate` <a name="ResetCloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate"></a>

```csharp
private void ResetCloudfrontDefaultCertificate()
```

##### `ResetIamCertificateId` <a name="ResetIamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId"></a>

```csharp
private void ResetIamCertificateId()
```

##### `ResetMinimumProtocolVersion` <a name="ResetMinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion"></a>

```csharp
private void ResetMinimumProtocolVersion()
```

##### `ResetSslSupportMethod` <a name="ResetSslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod"></a>

```csharp
private void ResetSslSupportMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput">AcmCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput">CloudfrontDefaultCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput">IamCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput">MinimumProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput">SslSupportMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate">CloudfrontDefaultCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId">IamCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion">MinimumProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod">SslSupportMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcmCertificateArnInput`<sup>Optional</sup> <a name="AcmCertificateArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput"></a>

```csharp
public string AcmCertificateArnInput { get; }
```

- *Type:* string

---

##### `CloudfrontDefaultCertificateInput`<sup>Optional</sup> <a name="CloudfrontDefaultCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput"></a>

```csharp
public object CloudfrontDefaultCertificateInput { get; }
```

- *Type:* object

---

##### `IamCertificateIdInput`<sup>Optional</sup> <a name="IamCertificateIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput"></a>

```csharp
public string IamCertificateIdInput { get; }
```

- *Type:* string

---

##### `MinimumProtocolVersionInput`<sup>Optional</sup> <a name="MinimumProtocolVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput"></a>

```csharp
public string MinimumProtocolVersionInput { get; }
```

- *Type:* string

---

##### `SslSupportMethodInput`<sup>Optional</sup> <a name="SslSupportMethodInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput"></a>

```csharp
public string SslSupportMethodInput { get; }
```

- *Type:* string

---

##### `AcmCertificateArn`<sup>Required</sup> <a name="AcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn"></a>

```csharp
public string AcmCertificateArn { get; }
```

- *Type:* string

---

##### `CloudfrontDefaultCertificate`<sup>Required</sup> <a name="CloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate"></a>

```csharp
public object CloudfrontDefaultCertificate { get; }
```

- *Type:* object

---

##### `IamCertificateId`<sup>Required</sup> <a name="IamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId"></a>

```csharp
public string IamCertificateId { get; }
```

- *Type:* string

---

##### `MinimumProtocolVersion`<sup>Required</sup> <a name="MinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion"></a>

```csharp
public string MinimumProtocolVersion { get; }
```

- *Type:* string

---

##### `SslSupportMethod`<sup>Required</sup> <a name="SslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod"></a>

```csharp
public string SslSupportMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionViewerCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---



