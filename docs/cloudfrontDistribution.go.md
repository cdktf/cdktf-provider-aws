# `cloudfrontDistribution` Submodule <a name="`cloudfrontDistribution` Submodule" id="@cdktf/provider-aws.cloudfrontDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistribution <a name="CloudfrontDistribution" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution aws_cloudfront_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistribution(scope Construct, id *string, config CloudfrontDistributionConfig) CloudfrontDistribution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig">CloudfrontDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomErrorResponse` <a name="PutCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse"></a>

```go
func PutCustomErrorResponse(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultCacheBehavior` <a name="PutDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior"></a>

```go
func PutDefaultCacheBehavior(value CloudfrontDistributionDefaultCacheBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig"></a>

```go
func PutLoggingConfig(value CloudfrontDistributionLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `PutOrderedCacheBehavior` <a name="PutOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior"></a>

```go
func PutOrderedCacheBehavior(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin"></a>

```go
func PutOrigin(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOriginGroup` <a name="PutOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup"></a>

```go
func PutOriginGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions"></a>

```go
func PutRestrictions(value CloudfrontDistributionRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `PutViewerCertificate` <a name="PutViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate"></a>

```go
func PutViewerCertificate(value CloudfrontDistributionViewerCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases"></a>

```go
func ResetAliases()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCustomErrorResponse` <a name="ResetCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse"></a>

```go
func ResetCustomErrorResponse()
```

##### `ResetDefaultRootObject` <a name="ResetDefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject"></a>

```go
func ResetDefaultRootObject()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion"></a>

```go
func ResetHttpVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId"></a>

```go
func ResetId()
```

##### `ResetIsIpv6Enabled` <a name="ResetIsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled"></a>

```go
func ResetIsIpv6Enabled()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetOrderedCacheBehavior` <a name="ResetOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior"></a>

```go
func ResetOrderedCacheBehavior()
```

##### `ResetOriginGroup` <a name="ResetOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup"></a>

```go
func ResetOriginGroup()
```

##### `ResetPriceClass` <a name="ResetPriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass"></a>

```go
func ResetPriceClass()
```

##### `ResetRetainOnDelete` <a name="ResetRetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete"></a>

```go
func ResetRetainOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetWaitForDeployment` <a name="ResetWaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment"></a>

```go
func ResetWaitForDeployment()
```

##### `ResetWebAclId` <a name="ResetWebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId"></a>

```go
func ResetWebAclId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.CloudfrontDistribution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.CloudfrontDistribution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.CloudfrontDistribution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference">CallerReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse">CustomErrorResponse</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches">InProgressValidationBatches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior">OrderedCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners">TrustedSigners</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate">ViewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput">AliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput">CustomErrorResponseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput">DefaultCacheBehaviorInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput">DefaultRootObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput">HttpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput">IsIpv6EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput">OrderedCacheBehaviorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput">OriginGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput">OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput">PriceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput">RetainOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput">ViewerCertificateInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput">WaitForDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput">WebAclIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject">DefaultRootObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion">HttpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass">PriceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete">RetainOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment">WaitForDeployment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId">WebAclId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference"></a>

```go
func CallerReference() *string
```

- *Type:* *string

---

##### `CustomErrorResponse`<sup>Required</sup> <a name="CustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse"></a>

```go
func CustomErrorResponse() CloudfrontDistributionCustomErrorResponseList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a>

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior"></a>

```go
func DefaultCacheBehavior() CloudfrontDistributionDefaultCacheBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InProgressValidationBatches`<sup>Required</sup> <a name="InProgressValidationBatches" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches"></a>

```go
func InProgressValidationBatches() *f64
```

- *Type:* *f64

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig"></a>

```go
func LoggingConfig() CloudfrontDistributionLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a>

---

##### `OrderedCacheBehavior`<sup>Required</sup> <a name="OrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior"></a>

```go
func OrderedCacheBehavior() CloudfrontDistributionOrderedCacheBehaviorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin"></a>

```go
func Origin() CloudfrontDistributionOriginList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a>

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup"></a>

```go
func OriginGroup() CloudfrontDistributionOriginGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a>

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions"></a>

```go
func Restrictions() CloudfrontDistributionRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups"></a>

```go
func TrustedKeyGroups() CloudfrontDistributionTrustedKeyGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a>

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners"></a>

```go
func TrustedSigners() CloudfrontDistributionTrustedSignersList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a>

---

##### `ViewerCertificate`<sup>Required</sup> <a name="ViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate"></a>

```go
func ViewerCertificate() CloudfrontDistributionViewerCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a>

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput"></a>

```go
func AliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CustomErrorResponseInput`<sup>Optional</sup> <a name="CustomErrorResponseInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput"></a>

```go
func CustomErrorResponseInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultCacheBehaviorInput`<sup>Optional</sup> <a name="DefaultCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput"></a>

```go
func DefaultCacheBehaviorInput() CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `DefaultRootObjectInput`<sup>Optional</sup> <a name="DefaultRootObjectInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput"></a>

```go
func DefaultRootObjectInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput"></a>

```go
func HttpVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsIpv6EnabledInput`<sup>Optional</sup> <a name="IsIpv6EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput"></a>

```go
func IsIpv6EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `OrderedCacheBehaviorInput`<sup>Optional</sup> <a name="OrderedCacheBehaviorInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput"></a>

```go
func OrderedCacheBehaviorInput() interface{}
```

- *Type:* interface{}

---

##### `OriginGroupInput`<sup>Optional</sup> <a name="OriginGroupInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput"></a>

```go
func OriginGroupInput() interface{}
```

- *Type:* interface{}

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput"></a>

```go
func OriginInput() interface{}
```

- *Type:* interface{}

---

##### `PriceClassInput`<sup>Optional</sup> <a name="PriceClassInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput"></a>

```go
func PriceClassInput() *string
```

- *Type:* *string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput"></a>

```go
func RestrictionsInput() CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `RetainOnDeleteInput`<sup>Optional</sup> <a name="RetainOnDeleteInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput"></a>

```go
func RetainOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ViewerCertificateInput`<sup>Optional</sup> <a name="ViewerCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput"></a>

```go
func ViewerCertificateInput() CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `WaitForDeploymentInput`<sup>Optional</sup> <a name="WaitForDeploymentInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput"></a>

```go
func WaitForDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `WebAclIdInput`<sup>Optional</sup> <a name="WebAclIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput"></a>

```go
func WebAclIdInput() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DefaultRootObject`<sup>Required</sup> <a name="DefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject"></a>

```go
func DefaultRootObject() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion"></a>

```go
func HttpVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIpv6Enabled`<sup>Required</sup> <a name="IsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled"></a>

```go
func IsIpv6Enabled() interface{}
```

- *Type:* interface{}

---

##### `PriceClass`<sup>Required</sup> <a name="PriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass"></a>

```go
func PriceClass() *string
```

- *Type:* *string

---

##### `RetainOnDelete`<sup>Required</sup> <a name="RetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete"></a>

```go
func RetainOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WaitForDeployment`<sup>Required</sup> <a name="WaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment"></a>

```go
func WaitForDeployment() interface{}
```

- *Type:* interface{}

---

##### `WebAclId`<sup>Required</sup> <a name="WebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId"></a>

```go
func WebAclId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionConfig <a name="CloudfrontDistributionConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultCacheBehavior: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior,
	Enabled: interface{},
	Origin: interface{},
	Restrictions: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionRestrictions,
	ViewerCertificate: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate,
	Aliases: *[]*string,
	Comment: *string,
	CustomErrorResponse: interface{},
	DefaultRootObject: *string,
	HttpVersion: *string,
	Id: *string,
	IsIpv6Enabled: interface{},
	LoggingConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig,
	OrderedCacheBehavior: interface{},
	OriginGroup: interface{},
	PriceClass: *string,
	RetainOnDelete: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	WaitForDeployment: interface{},
	WebAclId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin">Origin</a></code> | <code>interface{}</code> | origin block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate">ViewerCertificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | viewer_certificate block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases">Aliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse">CustomErrorResponse</a></code> | <code>interface{}</code> | custom_error_response block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject">DefaultRootObject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion">HttpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior">OrderedCacheBehavior</a></code> | <code>interface{}</code> | ordered_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup">OriginGroup</a></code> | <code>interface{}</code> | origin_group block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass">PriceClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete">RetainOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment">WaitForDeployment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId">WebAclId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior"></a>

```go
DefaultCacheBehavior CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin"></a>

```go
Origin interface{}
```

- *Type:* interface{}

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin CloudfrontDistribution#origin}

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions"></a>

```go
Restrictions CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}

---

##### `ViewerCertificate`<sup>Required</sup> <a name="ViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate"></a>

```go
ViewerCertificate CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

viewer_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases"></a>

```go
Aliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}.

---

##### `CustomErrorResponse`<sup>Optional</sup> <a name="CustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse"></a>

```go
CustomErrorResponse interface{}
```

- *Type:* interface{}

custom_error_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}

---

##### `DefaultRootObject`<sup>Optional</sup> <a name="DefaultRootObject" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject"></a>

```go
DefaultRootObject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}.

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion"></a>

```go
HttpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIpv6Enabled`<sup>Optional</sup> <a name="IsIpv6Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled"></a>

```go
IsIpv6Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig"></a>

```go
LoggingConfig CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}

---

##### `OrderedCacheBehavior`<sup>Optional</sup> <a name="OrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior"></a>

```go
OrderedCacheBehavior interface{}
```

- *Type:* interface{}

ordered_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}

---

##### `OriginGroup`<sup>Optional</sup> <a name="OriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup"></a>

```go
OriginGroup interface{}
```

- *Type:* interface{}

origin_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}

---

##### `PriceClass`<sup>Optional</sup> <a name="PriceClass" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass"></a>

```go
PriceClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}.

---

##### `RetainOnDelete`<sup>Optional</sup> <a name="RetainOnDelete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete"></a>

```go
RetainOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}.

---

##### `WaitForDeployment`<sup>Optional</sup> <a name="WaitForDeployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment"></a>

```go
WaitForDeployment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.

---

##### `WebAclId`<sup>Optional</sup> <a name="WebAclId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId"></a>

```go
WebAclId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}.

---

### CloudfrontDistributionCustomErrorResponse <a name="CloudfrontDistributionCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionCustomErrorResponse {
	ErrorCode: *f64,
	ErrorCachingMinTtl: *f64,
	ResponseCode: *f64,
	ResponsePagePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode">ErrorCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl">ErrorCachingMinTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath">ResponsePagePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}. |

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode"></a>

```go
ErrorCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}.

---

##### `ErrorCachingMinTtl`<sup>Optional</sup> <a name="ErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl"></a>

```go
ErrorCachingMinTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}.

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode"></a>

```go
ResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}.

---

##### `ResponsePagePath`<sup>Optional</sup> <a name="ResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath"></a>

```go
ResponsePagePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}.

---

### CloudfrontDistributionDefaultCacheBehavior <a name="CloudfrontDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionDefaultCacheBehavior {
	AllowedMethods: *[]*string,
	CachedMethods: *[]*string,
	TargetOriginId: *string,
	ViewerProtocolPolicy: *string,
	CachePolicyId: *string,
	Compress: interface{},
	DefaultTtl: *f64,
	FieldLevelEncryptionId: *string,
	ForwardedValues: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues,
	FunctionAssociation: interface{},
	LambdaFunctionAssociation: interface{},
	MaxTtl: *f64,
	MinTtl: *f64,
	OriginRequestPolicyId: *string,
	RealtimeLogConfigArn: *string,
	ResponseHeadersPolicyId: *string,
	SmoothStreaming: interface{},
	TrustedKeyGroups: *[]*string,
	TrustedSigners: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods">CachedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId">TargetOriginId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId">CachePolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress">Compress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation">FunctionAssociation</a></code> | <code>interface{}</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code>interface{}</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl">MinTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming">SmoothStreaming</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners">TrustedSigners</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods"></a>

```go
CachedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId"></a>

```go
TargetOriginId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy"></a>

```go
ViewerProtocolPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `CachePolicyId`<sup>Optional</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId"></a>

```go
CachePolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `Compress`<sup>Optional</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress"></a>

```go
Compress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `FieldLevelEncryptionId`<sup>Optional</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId"></a>

```go
FieldLevelEncryptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `ForwardedValues`<sup>Optional</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues"></a>

```go
ForwardedValues CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `FunctionAssociation`<sup>Optional</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation"></a>

```go
FunctionAssociation interface{}
```

- *Type:* interface{}

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `LambdaFunctionAssociation`<sup>Optional</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation"></a>

```go
LambdaFunctionAssociation interface{}
```

- *Type:* interface{}

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `MinTtl`<sup>Optional</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl"></a>

```go
MinTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `OriginRequestPolicyId`<sup>Optional</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId"></a>

```go
OriginRequestPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `RealtimeLogConfigArn`<sup>Optional</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn"></a>

```go
RealtimeLogConfigArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `ResponseHeadersPolicyId`<sup>Optional</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId"></a>

```go
ResponseHeadersPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `SmoothStreaming`<sup>Optional</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming"></a>

```go
SmoothStreaming interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `TrustedKeyGroups`<sup>Optional</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups"></a>

```go
TrustedKeyGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `TrustedSigners`<sup>Optional</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners"></a>

```go
TrustedSigners *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValues <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
	Cookies: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies,
	QueryString: interface{},
	Headers: *[]*string,
	QueryStringCacheKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString">QueryString</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers">Headers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies"></a>

```go
Cookies CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers"></a>

```go
Headers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `QueryStringCacheKeys`<sup>Optional</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```go
QueryStringCacheKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
	Forward: *string,
	WhitelistedNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward">Forward</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames">WhitelistedNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward"></a>

```go
Forward *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `WhitelistedNames`<sup>Optional</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```go
WhitelistedNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
	EventType: *string,
	FunctionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
	EventType: *string,
	LambdaArn: *string,
	IncludeBody: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody">IncludeBody</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `IncludeBody`<sup>Optional</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```go
IncludeBody interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionLoggingConfig <a name="CloudfrontDistributionLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionLoggingConfig {
	Bucket: *string,
	IncludeCookies: interface{},
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies">IncludeCookies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}.

---

##### `IncludeCookies`<sup>Optional</sup> <a name="IncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies"></a>

```go
IncludeCookies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}.

---

### CloudfrontDistributionOrderedCacheBehavior <a name="CloudfrontDistributionOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrderedCacheBehavior {
	AllowedMethods: *[]*string,
	CachedMethods: *[]*string,
	PathPattern: *string,
	TargetOriginId: *string,
	ViewerProtocolPolicy: *string,
	CachePolicyId: *string,
	Compress: interface{},
	DefaultTtl: *f64,
	FieldLevelEncryptionId: *string,
	ForwardedValues: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues,
	FunctionAssociation: interface{},
	LambdaFunctionAssociation: interface{},
	MaxTtl: *f64,
	MinTtl: *f64,
	OriginRequestPolicyId: *string,
	RealtimeLogConfigArn: *string,
	ResponseHeadersPolicyId: *string,
	SmoothStreaming: interface{},
	TrustedKeyGroups: *[]*string,
	TrustedSigners: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods">CachedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern">PathPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId">TargetOriginId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId">CachePolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress">Compress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation">FunctionAssociation</a></code> | <code>interface{}</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code>interface{}</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl">MinTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming">SmoothStreaming</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners">TrustedSigners</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods"></a>

```go
CachedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern"></a>

```go
PathPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}.

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId"></a>

```go
TargetOriginId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy"></a>

```go
ViewerProtocolPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `CachePolicyId`<sup>Optional</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId"></a>

```go
CachePolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `Compress`<sup>Optional</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress"></a>

```go
Compress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `FieldLevelEncryptionId`<sup>Optional</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId"></a>

```go
FieldLevelEncryptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `ForwardedValues`<sup>Optional</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues"></a>

```go
ForwardedValues CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `FunctionAssociation`<sup>Optional</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation"></a>

```go
FunctionAssociation interface{}
```

- *Type:* interface{}

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `LambdaFunctionAssociation`<sup>Optional</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation"></a>

```go
LambdaFunctionAssociation interface{}
```

- *Type:* interface{}

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `MinTtl`<sup>Optional</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl"></a>

```go
MinTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `OriginRequestPolicyId`<sup>Optional</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId"></a>

```go
OriginRequestPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `RealtimeLogConfigArn`<sup>Optional</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn"></a>

```go
RealtimeLogConfigArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `ResponseHeadersPolicyId`<sup>Optional</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId"></a>

```go
ResponseHeadersPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `SmoothStreaming`<sup>Optional</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming"></a>

```go
SmoothStreaming interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `TrustedKeyGroups`<sup>Optional</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups"></a>

```go
TrustedKeyGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `TrustedSigners`<sup>Optional</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners"></a>

```go
TrustedSigners *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValues <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
	Cookies: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies,
	QueryString: interface{},
	Headers: *[]*string,
	QueryStringCacheKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString">QueryString</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers">Headers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies"></a>

```go
Cookies CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers"></a>

```go
Headers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `QueryStringCacheKeys`<sup>Optional</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```go
QueryStringCacheKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
	Forward: *string,
	WhitelistedNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward">Forward</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames">WhitelistedNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward"></a>

```go
Forward *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `WhitelistedNames`<sup>Optional</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```go
WhitelistedNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
	EventType: *string,
	FunctionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
	EventType: *string,
	LambdaArn: *string,
	IncludeBody: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody">IncludeBody</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `IncludeBody`<sup>Optional</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```go
IncludeBody interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionOrigin <a name="CloudfrontDistributionOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOrigin {
	DomainName: *string,
	OriginId: *string,
	ConnectionAttempts: *f64,
	ConnectionTimeout: *f64,
	CustomHeader: interface{},
	CustomOriginConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig,
	OriginAccessControlId: *string,
	OriginPath: *string,
	OriginShield: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield,
	S3OriginConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId">OriginId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts">ConnectionAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader">CustomHeader</a></code> | <code>interface{}</code> | custom_header block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig">CustomOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | custom_origin_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId">OriginAccessControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath">OriginPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield">OriginShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | origin_shield block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig">S3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | s3_origin_config block. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}.

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId"></a>

```go
OriginId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

##### `ConnectionAttempts`<sup>Optional</sup> <a name="ConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts"></a>

```go
ConnectionAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}.

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout"></a>

```go
ConnectionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader"></a>

```go
CustomHeader interface{}
```

- *Type:* interface{}

custom_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}

---

##### `CustomOriginConfig`<sup>Optional</sup> <a name="CustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig"></a>

```go
CustomOriginConfig CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

custom_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}

---

##### `OriginAccessControlId`<sup>Optional</sup> <a name="OriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId"></a>

```go
OriginAccessControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}.

---

##### `OriginPath`<sup>Optional</sup> <a name="OriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath"></a>

```go
OriginPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}.

---

##### `OriginShield`<sup>Optional</sup> <a name="OriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield"></a>

```go
OriginShield CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

origin_shield block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}

---

##### `S3OriginConfig`<sup>Optional</sup> <a name="S3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig"></a>

```go
S3OriginConfig CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

s3_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}

---

### CloudfrontDistributionOriginCustomHeader <a name="CloudfrontDistributionOriginCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginCustomHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}.

---

### CloudfrontDistributionOriginCustomOriginConfig <a name="CloudfrontDistributionOriginCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginCustomOriginConfig {
	HttpPort: *f64,
	HttpsPort: *f64,
	OriginProtocolPolicy: *string,
	OriginSslProtocols: *[]*string,
	OriginKeepaliveTimeout: *f64,
	OriginReadTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort">HttpPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols">OriginSslProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout">OriginKeepaliveTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout">OriginReadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}. |

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort"></a>

```go
HttpPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort"></a>

```go
HttpsPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}.

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy"></a>

```go
OriginProtocolPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols"></a>

```go
OriginSslProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.

---

##### `OriginKeepaliveTimeout`<sup>Optional</sup> <a name="OriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout"></a>

```go
OriginKeepaliveTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.

---

##### `OriginReadTimeout`<sup>Optional</sup> <a name="OriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout"></a>

```go
OriginReadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.

---

### CloudfrontDistributionOriginGroup <a name="CloudfrontDistributionOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginGroup {
	FailoverCriteria: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria,
	Member: interface{},
	OriginId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria">FailoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | failover_criteria block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member">Member</a></code> | <code>interface{}</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId">OriginId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `FailoverCriteria`<sup>Required</sup> <a name="FailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria"></a>

```go
FailoverCriteria CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

failover_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member"></a>

```go
Member interface{}
```

- *Type:* interface{}

member block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#member CloudfrontDistribution#member}

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId"></a>

```go
OriginId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginGroupFailoverCriteria <a name="CloudfrontDistributionOriginGroupFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginGroupFailoverCriteria {
	StatusCodes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes">StatusCodes</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}. |

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes"></a>

```go
StatusCodes *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}.

---

### CloudfrontDistributionOriginGroupMember <a name="CloudfrontDistributionOriginGroupMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginGroupMember {
	OriginId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId">OriginId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId"></a>

```go
OriginId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginOriginShield <a name="CloudfrontDistributionOriginOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginOriginShield {
	Enabled: interface{},
	OriginShieldRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion">OriginShieldRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `OriginShieldRegion`<sup>Required</sup> <a name="OriginShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion"></a>

```go
OriginShieldRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}.

---

### CloudfrontDistributionOriginS3OriginConfig <a name="CloudfrontDistributionOriginS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionOriginS3OriginConfig {
	OriginAccessIdentity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity">OriginAccessIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}. |

---

##### `OriginAccessIdentity`<sup>Required</sup> <a name="OriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity"></a>

```go
OriginAccessIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}.

---

### CloudfrontDistributionRestrictions <a name="CloudfrontDistributionRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionRestrictions {
	GeoRestriction: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | geo_restriction block. |

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction"></a>

```go
GeoRestriction CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

geo_restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}

---

### CloudfrontDistributionRestrictionsGeoRestriction <a name="CloudfrontDistributionRestrictionsGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionRestrictionsGeoRestriction {
	RestrictionType: *string,
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations">Locations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}. |

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType"></a>

```go
RestrictionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}.

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}.

---

### CloudfrontDistributionTrustedKeyGroups <a name="CloudfrontDistributionTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionTrustedKeyGroups {

}
```


### CloudfrontDistributionTrustedKeyGroupsItems <a name="CloudfrontDistributionTrustedKeyGroupsItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionTrustedKeyGroupsItems {

}
```


### CloudfrontDistributionTrustedSigners <a name="CloudfrontDistributionTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionTrustedSigners {

}
```


### CloudfrontDistributionTrustedSignersItems <a name="CloudfrontDistributionTrustedSignersItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionTrustedSignersItems {

}
```


### CloudfrontDistributionViewerCertificate <a name="CloudfrontDistributionViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

&cloudfrontdistribution.CloudfrontDistributionViewerCertificate {
	AcmCertificateArn: *string,
	CloudfrontDefaultCertificate: interface{},
	IamCertificateId: *string,
	MinimumProtocolVersion: *string,
	SslSupportMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate">CloudfrontDefaultCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId">IamCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion">MinimumProtocolVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod">SslSupportMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}. |

---

##### `AcmCertificateArn`<sup>Optional</sup> <a name="AcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn"></a>

```go
AcmCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.

---

##### `CloudfrontDefaultCertificate`<sup>Optional</sup> <a name="CloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate"></a>

```go
CloudfrontDefaultCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.

---

##### `IamCertificateId`<sup>Optional</sup> <a name="IamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId"></a>

```go
IamCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.

---

##### `MinimumProtocolVersion`<sup>Optional</sup> <a name="MinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion"></a>

```go
MinimumProtocolVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.

---

##### `SslSupportMethod`<sup>Optional</sup> <a name="SslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod"></a>

```go
SslSupportMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionCustomErrorResponseList <a name="CloudfrontDistributionCustomErrorResponseList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionCustomErrorResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionCustomErrorResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionCustomErrorResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionCustomErrorResponseOutputReference <a name="CloudfrontDistributionCustomErrorResponseOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionCustomErrorResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionCustomErrorResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorCachingMinTtl` <a name="ResetErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl"></a>

```go
func ResetErrorCachingMinTtl()
```

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode"></a>

```go
func ResetResponseCode()
```

##### `ResetResponsePagePath` <a name="ResetResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath"></a>

```go
func ResetResponsePagePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput">ErrorCachingMinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput">ErrorCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput">ResponsePagePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl">ErrorCachingMinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode">ErrorCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath">ResponsePagePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorCachingMinTtlInput`<sup>Optional</sup> <a name="ErrorCachingMinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput"></a>

```go
func ErrorCachingMinTtlInput() *f64
```

- *Type:* *f64

---

##### `ErrorCodeInput`<sup>Optional</sup> <a name="ErrorCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput"></a>

```go
func ErrorCodeInput() *f64
```

- *Type:* *f64

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `ResponsePagePathInput`<sup>Optional</sup> <a name="ResponsePagePathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput"></a>

```go
func ResponsePagePathInput() *string
```

- *Type:* *string

---

##### `ErrorCachingMinTtl`<sup>Required</sup> <a name="ErrorCachingMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl"></a>

```go
func ErrorCachingMinTtl() *f64
```

- *Type:* *f64

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode"></a>

```go
func ErrorCode() *f64
```

- *Type:* *f64

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `ResponsePagePath`<sup>Required</sup> <a name="ResponsePagePath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath"></a>

```go
func ResponsePagePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWhitelistedNames` <a name="ResetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```go
func ResetWhitelistedNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">ForwardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">WhitelistedNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">Forward</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">WhitelistedNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```go
func ForwardInput() *string
```

- *Type:* *string

---

##### `WhitelistedNamesInput`<sup>Optional</sup> <a name="WhitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```go
func WhitelistedNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```go
func Forward() *string
```

- *Type:* *string

---

##### `WhitelistedNames`<sup>Required</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```go
func WhitelistedNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```go
func PutCookies(value CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryStringCacheKeys` <a name="ResetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```go
func ResetQueryStringCacheKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput">HeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">QueryStringCacheKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers">Headers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString">QueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```go
func Cookies() CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```go
func CookiesInput() CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```go
func HeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringCacheKeysInput`<sup>Optional</sup> <a name="QueryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```go
func QueryStringCacheKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```go
func Headers() *[]*string
```

- *Type:* *[]*string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```go
func QueryString() interface{}
```

- *Type:* interface{}

---

##### `QueryStringCacheKeys`<sup>Required</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```go
func QueryStringCacheKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeBody` <a name="ResetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```go
func ResetIncludeBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">IncludeBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">IncludeBody</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `IncludeBodyInput`<sup>Optional</sup> <a name="IncludeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```go
func IncludeBodyInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `IncludeBody`<sup>Required</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```go
func IncludeBody() interface{}
```

- *Type:* interface{}

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionDefaultCacheBehaviorOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionDefaultCacheBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionDefaultCacheBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedValues` <a name="PutForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues"></a>

```go
func PutForwardedValues(value CloudfrontDistributionDefaultCacheBehaviorForwardedValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `PutFunctionAssociation` <a name="PutFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation"></a>

```go
func PutFunctionAssociation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLambdaFunctionAssociation` <a name="PutLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```go
func PutLambdaFunctionAssociation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCachePolicyId` <a name="ResetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId"></a>

```go
func ResetCachePolicyId()
```

##### `ResetCompress` <a name="ResetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress"></a>

```go
func ResetCompress()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetFieldLevelEncryptionId` <a name="ResetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```go
func ResetFieldLevelEncryptionId()
```

##### `ResetForwardedValues` <a name="ResetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues"></a>

```go
func ResetForwardedValues()
```

##### `ResetFunctionAssociation` <a name="ResetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```go
func ResetFunctionAssociation()
```

##### `ResetLambdaFunctionAssociation` <a name="ResetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```go
func ResetLambdaFunctionAssociation()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetMinTtl` <a name="ResetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl"></a>

```go
func ResetMinTtl()
```

##### `ResetOriginRequestPolicyId` <a name="ResetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```go
func ResetOriginRequestPolicyId()
```

##### `ResetRealtimeLogConfigArn` <a name="ResetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```go
func ResetRealtimeLogConfigArn()
```

##### `ResetResponseHeadersPolicyId` <a name="ResetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```go
func ResetResponseHeadersPolicyId()
```

##### `ResetSmoothStreaming` <a name="ResetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```go
func ResetSmoothStreaming()
```

##### `ResetTrustedKeyGroups` <a name="ResetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```go
func ResetTrustedKeyGroups()
```

##### `ResetTrustedSigners` <a name="ResetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners"></a>

```go
func ResetTrustedSigners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation">FunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput">CachedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput">CachePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput">CompressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">FieldLevelEncryptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput">ForwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput">FunctionAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">LambdaFunctionAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput">OriginRequestPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">RealtimeLogConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">ResponseHeadersPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput">SmoothStreamingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput">TargetOriginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput">TrustedKeyGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput">TrustedSignersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">ViewerProtocolPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods">CachedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId">CachePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress">Compress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming">SmoothStreaming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId">TargetOriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners">TrustedSigners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedValues`<sup>Required</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues"></a>

```go
func ForwardedValues() CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a>

---

##### `FunctionAssociation`<sup>Required</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation"></a>

```go
func FunctionAssociation() CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a>

---

##### `LambdaFunctionAssociation`<sup>Required</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```go
func LambdaFunctionAssociation() CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CachedMethodsInput`<sup>Optional</sup> <a name="CachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```go
func CachedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CachePolicyIdInput`<sup>Optional</sup> <a name="CachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```go
func CachePolicyIdInput() *string
```

- *Type:* *string

---

##### `CompressInput`<sup>Optional</sup> <a name="CompressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput"></a>

```go
func CompressInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `FieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="FieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```go
func FieldLevelEncryptionIdInput() *string
```

- *Type:* *string

---

##### `ForwardedValuesInput`<sup>Optional</sup> <a name="ForwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```go
func ForwardedValuesInput() CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `FunctionAssociationInput`<sup>Optional</sup> <a name="FunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```go
func FunctionAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaFunctionAssociationInput`<sup>Optional</sup> <a name="LambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```go
func LambdaFunctionAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput"></a>

```go
func MinTtlInput() *f64
```

- *Type:* *f64

---

##### `OriginRequestPolicyIdInput`<sup>Optional</sup> <a name="OriginRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```go
func OriginRequestPolicyIdInput() *string
```

- *Type:* *string

---

##### `RealtimeLogConfigArnInput`<sup>Optional</sup> <a name="RealtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```go
func RealtimeLogConfigArnInput() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyIdInput`<sup>Optional</sup> <a name="ResponseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```go
func ResponseHeadersPolicyIdInput() *string
```

- *Type:* *string

---

##### `SmoothStreamingInput`<sup>Optional</sup> <a name="SmoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```go
func SmoothStreamingInput() interface{}
```

- *Type:* interface{}

---

##### `TargetOriginIdInput`<sup>Optional</sup> <a name="TargetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```go
func TargetOriginIdInput() *string
```

- *Type:* *string

---

##### `TrustedKeyGroupsInput`<sup>Optional</sup> <a name="TrustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```go
func TrustedKeyGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedSignersInput`<sup>Optional</sup> <a name="TrustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```go
func TrustedSignersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ViewerProtocolPolicyInput`<sup>Optional</sup> <a name="ViewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```go
func ViewerProtocolPolicyInput() *string
```

- *Type:* *string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods"></a>

```go
func CachedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `CachePolicyId`<sup>Required</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId"></a>

```go
func CachePolicyId() *string
```

- *Type:* *string

---

##### `Compress`<sup>Required</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress"></a>

```go
func Compress() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `FieldLevelEncryptionId`<sup>Required</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```go
func FieldLevelEncryptionId() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```go
func OriginRequestPolicyId() *string
```

- *Type:* *string

---

##### `RealtimeLogConfigArn`<sup>Required</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```go
func RealtimeLogConfigArn() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyId`<sup>Required</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```go
func ResponseHeadersPolicyId() *string
```

- *Type:* *string

---

##### `SmoothStreaming`<sup>Required</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming"></a>

```go
func SmoothStreaming() interface{}
```

- *Type:* interface{}

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId"></a>

```go
func TargetOriginId() *string
```

- *Type:* *string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```go
func TrustedKeyGroups() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners"></a>

```go
func TrustedSigners() *[]*string
```

- *Type:* *[]*string

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```go
func ViewerProtocolPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---


### CloudfrontDistributionLoggingConfigOutputReference <a name="CloudfrontDistributionLoggingConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeCookies` <a name="ResetIncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies"></a>

```go
func ResetIncludeCookies()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput">IncludeCookiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies">IncludeCookies</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IncludeCookiesInput`<sup>Optional</sup> <a name="IncludeCookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput"></a>

```go
func IncludeCookiesInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `IncludeCookies`<sup>Required</sup> <a name="IncludeCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies"></a>

```go
func IncludeCookies() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWhitelistedNames` <a name="ResetWhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```go
func ResetWhitelistedNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">ForwardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">WhitelistedNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">Forward</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">WhitelistedNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```go
func ForwardInput() *string
```

- *Type:* *string

---

##### `WhitelistedNamesInput`<sup>Optional</sup> <a name="WhitelistedNamesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```go
func WhitelistedNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```go
func Forward() *string
```

- *Type:* *string

---

##### `WhitelistedNames`<sup>Required</sup> <a name="WhitelistedNames" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```go
func WhitelistedNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```go
func PutCookies(value CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryStringCacheKeys` <a name="ResetQueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```go
func ResetQueryStringCacheKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput">HeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">QueryStringCacheKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers">Headers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString">QueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">QueryStringCacheKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```go
func Cookies() CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```go
func CookiesInput() CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```go
func HeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringCacheKeysInput`<sup>Optional</sup> <a name="QueryStringCacheKeysInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```go
func QueryStringCacheKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```go
func Headers() *[]*string
```

- *Type:* *[]*string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```go
func QueryString() interface{}
```

- *Type:* interface{}

---

##### `QueryStringCacheKeys`<sup>Required</sup> <a name="QueryStringCacheKeys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```go
func QueryStringCacheKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeBody` <a name="ResetIncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```go
func ResetIncludeBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">IncludeBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">IncludeBody</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `IncludeBodyInput`<sup>Optional</sup> <a name="IncludeBodyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```go
func IncludeBodyInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `IncludeBody`<sup>Required</sup> <a name="IncludeBody" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```go
func IncludeBody() interface{}
```

- *Type:* interface{}

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOrderedCacheBehaviorList <a name="CloudfrontDistributionOrderedCacheBehaviorList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOrderedCacheBehaviorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOrderedCacheBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOrderedCacheBehaviorOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOrderedCacheBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOrderedCacheBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedValues` <a name="PutForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues"></a>

```go
func PutForwardedValues(value CloudfrontDistributionOrderedCacheBehaviorForwardedValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `PutFunctionAssociation` <a name="PutFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation"></a>

```go
func PutFunctionAssociation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLambdaFunctionAssociation` <a name="PutLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```go
func PutLambdaFunctionAssociation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCachePolicyId` <a name="ResetCachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId"></a>

```go
func ResetCachePolicyId()
```

##### `ResetCompress` <a name="ResetCompress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress"></a>

```go
func ResetCompress()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetFieldLevelEncryptionId` <a name="ResetFieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```go
func ResetFieldLevelEncryptionId()
```

##### `ResetForwardedValues` <a name="ResetForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues"></a>

```go
func ResetForwardedValues()
```

##### `ResetFunctionAssociation` <a name="ResetFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```go
func ResetFunctionAssociation()
```

##### `ResetLambdaFunctionAssociation` <a name="ResetLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```go
func ResetLambdaFunctionAssociation()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetMinTtl` <a name="ResetMinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl"></a>

```go
func ResetMinTtl()
```

##### `ResetOriginRequestPolicyId` <a name="ResetOriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```go
func ResetOriginRequestPolicyId()
```

##### `ResetRealtimeLogConfigArn` <a name="ResetRealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```go
func ResetRealtimeLogConfigArn()
```

##### `ResetResponseHeadersPolicyId` <a name="ResetResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```go
func ResetResponseHeadersPolicyId()
```

##### `ResetSmoothStreaming` <a name="ResetSmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```go
func ResetSmoothStreaming()
```

##### `ResetTrustedKeyGroups` <a name="ResetTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```go
func ResetTrustedKeyGroups()
```

##### `ResetTrustedSigners` <a name="ResetTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners"></a>

```go
func ResetTrustedSigners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues">ForwardedValues</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation">FunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation">LambdaFunctionAssociation</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput">CachedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput">CachePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput">CompressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">FieldLevelEncryptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput">ForwardedValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput">FunctionAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">LambdaFunctionAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput">OriginRequestPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput">PathPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">RealtimeLogConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">ResponseHeadersPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput">SmoothStreamingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput">TargetOriginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput">TrustedKeyGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput">TrustedSignersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">ViewerProtocolPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods">CachedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId">CachePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress">Compress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId">FieldLevelEncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern">PathPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn">RealtimeLogConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming">SmoothStreaming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId">TargetOriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups">TrustedKeyGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners">TrustedSigners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy">ViewerProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedValues`<sup>Required</sup> <a name="ForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues"></a>

```go
func ForwardedValues() CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a>

---

##### `FunctionAssociation`<sup>Required</sup> <a name="FunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation"></a>

```go
func FunctionAssociation() CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a>

---

##### `LambdaFunctionAssociation`<sup>Required</sup> <a name="LambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```go
func LambdaFunctionAssociation() CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CachedMethodsInput`<sup>Optional</sup> <a name="CachedMethodsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```go
func CachedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CachePolicyIdInput`<sup>Optional</sup> <a name="CachePolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```go
func CachePolicyIdInput() *string
```

- *Type:* *string

---

##### `CompressInput`<sup>Optional</sup> <a name="CompressInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput"></a>

```go
func CompressInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `FieldLevelEncryptionIdInput`<sup>Optional</sup> <a name="FieldLevelEncryptionIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```go
func FieldLevelEncryptionIdInput() *string
```

- *Type:* *string

---

##### `ForwardedValuesInput`<sup>Optional</sup> <a name="ForwardedValuesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```go
func ForwardedValuesInput() CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `FunctionAssociationInput`<sup>Optional</sup> <a name="FunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```go
func FunctionAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaFunctionAssociationInput`<sup>Optional</sup> <a name="LambdaFunctionAssociationInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```go
func LambdaFunctionAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput"></a>

```go
func MinTtlInput() *f64
```

- *Type:* *f64

---

##### `OriginRequestPolicyIdInput`<sup>Optional</sup> <a name="OriginRequestPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```go
func OriginRequestPolicyIdInput() *string
```

- *Type:* *string

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput"></a>

```go
func PathPatternInput() *string
```

- *Type:* *string

---

##### `RealtimeLogConfigArnInput`<sup>Optional</sup> <a name="RealtimeLogConfigArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```go
func RealtimeLogConfigArnInput() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyIdInput`<sup>Optional</sup> <a name="ResponseHeadersPolicyIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```go
func ResponseHeadersPolicyIdInput() *string
```

- *Type:* *string

---

##### `SmoothStreamingInput`<sup>Optional</sup> <a name="SmoothStreamingInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```go
func SmoothStreamingInput() interface{}
```

- *Type:* interface{}

---

##### `TargetOriginIdInput`<sup>Optional</sup> <a name="TargetOriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```go
func TargetOriginIdInput() *string
```

- *Type:* *string

---

##### `TrustedKeyGroupsInput`<sup>Optional</sup> <a name="TrustedKeyGroupsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```go
func TrustedKeyGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedSignersInput`<sup>Optional</sup> <a name="TrustedSignersInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```go
func TrustedSignersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ViewerProtocolPolicyInput`<sup>Optional</sup> <a name="ViewerProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```go
func ViewerProtocolPolicyInput() *string
```

- *Type:* *string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `CachedMethods`<sup>Required</sup> <a name="CachedMethods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods"></a>

```go
func CachedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `CachePolicyId`<sup>Required</sup> <a name="CachePolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId"></a>

```go
func CachePolicyId() *string
```

- *Type:* *string

---

##### `Compress`<sup>Required</sup> <a name="Compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress"></a>

```go
func Compress() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `FieldLevelEncryptionId`<sup>Required</sup> <a name="FieldLevelEncryptionId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```go
func FieldLevelEncryptionId() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```go
func OriginRequestPolicyId() *string
```

- *Type:* *string

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern"></a>

```go
func PathPattern() *string
```

- *Type:* *string

---

##### `RealtimeLogConfigArn`<sup>Required</sup> <a name="RealtimeLogConfigArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```go
func RealtimeLogConfigArn() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyId`<sup>Required</sup> <a name="ResponseHeadersPolicyId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```go
func ResponseHeadersPolicyId() *string
```

- *Type:* *string

---

##### `SmoothStreaming`<sup>Required</sup> <a name="SmoothStreaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming"></a>

```go
func SmoothStreaming() interface{}
```

- *Type:* interface{}

---

##### `TargetOriginId`<sup>Required</sup> <a name="TargetOriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId"></a>

```go
func TargetOriginId() *string
```

- *Type:* *string

---

##### `TrustedKeyGroups`<sup>Required</sup> <a name="TrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```go
func TrustedKeyGroups() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedSigners`<sup>Required</sup> <a name="TrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners"></a>

```go
func TrustedSigners() *[]*string
```

- *Type:* *[]*string

---

##### `ViewerProtocolPolicy`<sup>Required</sup> <a name="ViewerProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```go
func ViewerProtocolPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginCustomHeaderList <a name="CloudfrontDistributionOriginCustomHeaderList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOriginCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOriginCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginCustomHeaderOutputReference <a name="CloudfrontDistributionOriginCustomHeaderOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOriginCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginCustomOriginConfigOutputReference <a name="CloudfrontDistributionOriginCustomOriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginCustomOriginConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOriginCustomOriginConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOriginKeepaliveTimeout` <a name="ResetOriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout"></a>

```go
func ResetOriginKeepaliveTimeout()
```

##### `ResetOriginReadTimeout` <a name="ResetOriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout"></a>

```go
func ResetOriginReadTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput">OriginKeepaliveTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput">OriginProtocolPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput">OriginReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput">OriginSslProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout">OriginKeepaliveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout">OriginReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols">OriginSslProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput"></a>

```go
func HttpPortInput() *f64
```

- *Type:* *f64

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput"></a>

```go
func HttpsPortInput() *f64
```

- *Type:* *f64

---

##### `OriginKeepaliveTimeoutInput`<sup>Optional</sup> <a name="OriginKeepaliveTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput"></a>

```go
func OriginKeepaliveTimeoutInput() *f64
```

- *Type:* *f64

---

##### `OriginProtocolPolicyInput`<sup>Optional</sup> <a name="OriginProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput"></a>

```go
func OriginProtocolPolicyInput() *string
```

- *Type:* *string

---

##### `OriginReadTimeoutInput`<sup>Optional</sup> <a name="OriginReadTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput"></a>

```go
func OriginReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `OriginSslProtocolsInput`<sup>Optional</sup> <a name="OriginSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput"></a>

```go
func OriginSslProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `OriginKeepaliveTimeout`<sup>Required</sup> <a name="OriginKeepaliveTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout"></a>

```go
func OriginKeepaliveTimeout() *f64
```

- *Type:* *f64

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy"></a>

```go
func OriginProtocolPolicy() *string
```

- *Type:* *string

---

##### `OriginReadTimeout`<sup>Required</sup> <a name="OriginReadTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout"></a>

```go
func OriginReadTimeout() *f64
```

- *Type:* *f64

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols"></a>

```go
func OriginSslProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---


### CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference <a name="CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginGroupFailoverCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes">StatusCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput"></a>

```go
func StatusCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes"></a>

```go
func StatusCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---


### CloudfrontDistributionOriginGroupList <a name="CloudfrontDistributionOriginGroupList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOriginGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginGroupMemberList <a name="CloudfrontDistributionOriginGroupMemberList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginGroupMemberList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOriginGroupMemberList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOriginGroupMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginGroupMemberOutputReference <a name="CloudfrontDistributionOriginGroupMemberOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginGroupMemberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOriginGroupMemberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId">OriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput"></a>

```go
func OriginIdInput() *string
```

- *Type:* *string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId"></a>

```go
func OriginId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginGroupOutputReference <a name="CloudfrontDistributionOriginGroupOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOriginGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailoverCriteria` <a name="PutFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria"></a>

```go
func PutFailoverCriteria(value CloudfrontDistributionOriginGroupFailoverCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `PutMember` <a name="PutMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember"></a>

```go
func PutMember(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria">FailoverCriteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member">Member</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput">FailoverCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput">MemberInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId">OriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailoverCriteria`<sup>Required</sup> <a name="FailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria"></a>

```go
func FailoverCriteria() CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a>

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member"></a>

```go
func Member() CloudfrontDistributionOriginGroupMemberList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a>

---

##### `FailoverCriteriaInput`<sup>Optional</sup> <a name="FailoverCriteriaInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput"></a>

```go
func FailoverCriteriaInput() CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput"></a>

```go
func MemberInput() interface{}
```

- *Type:* interface{}

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput"></a>

```go
func OriginIdInput() *string
```

- *Type:* *string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId"></a>

```go
func OriginId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginList <a name="CloudfrontDistributionOriginList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionOriginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginOriginShieldOutputReference <a name="CloudfrontDistributionOriginOriginShieldOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginOriginShieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOriginOriginShieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput">OriginShieldRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion">OriginShieldRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OriginShieldRegionInput`<sup>Optional</sup> <a name="OriginShieldRegionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput"></a>

```go
func OriginShieldRegionInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `OriginShieldRegion`<sup>Required</sup> <a name="OriginShieldRegion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion"></a>

```go
func OriginShieldRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---


### CloudfrontDistributionOriginOutputReference <a name="CloudfrontDistributionOriginOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader"></a>

```go
func PutCustomHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomOriginConfig` <a name="PutCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig"></a>

```go
func PutCustomOriginConfig(value CloudfrontDistributionOriginCustomOriginConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `PutOriginShield` <a name="PutOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield"></a>

```go
func PutOriginShield(value CloudfrontDistributionOriginOriginShield)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `PutS3OriginConfig` <a name="PutS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig"></a>

```go
func PutS3OriginConfig(value CloudfrontDistributionOriginS3OriginConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `ResetConnectionAttempts` <a name="ResetConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts"></a>

```go
func ResetConnectionAttempts()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout"></a>

```go
func ResetConnectionTimeout()
```

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader"></a>

```go
func ResetCustomHeader()
```

##### `ResetCustomOriginConfig` <a name="ResetCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig"></a>

```go
func ResetCustomOriginConfig()
```

##### `ResetOriginAccessControlId` <a name="ResetOriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId"></a>

```go
func ResetOriginAccessControlId()
```

##### `ResetOriginPath` <a name="ResetOriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath"></a>

```go
func ResetOriginPath()
```

##### `ResetOriginShield` <a name="ResetOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield"></a>

```go
func ResetOriginShield()
```

##### `ResetS3OriginConfig` <a name="ResetS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig"></a>

```go
func ResetS3OriginConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig">CustomOriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield">OriginShield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig">S3OriginConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput">ConnectionAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput">CustomHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput">CustomOriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput">OriginAccessControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput">OriginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput">OriginPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput">OriginShieldInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput">S3OriginConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts">ConnectionAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId">OriginAccessControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId">OriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath">OriginPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader"></a>

```go
func CustomHeader() CloudfrontDistributionOriginCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a>

---

##### `CustomOriginConfig`<sup>Required</sup> <a name="CustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig"></a>

```go
func CustomOriginConfig() CloudfrontDistributionOriginCustomOriginConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a>

---

##### `OriginShield`<sup>Required</sup> <a name="OriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield"></a>

```go
func OriginShield() CloudfrontDistributionOriginOriginShieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a>

---

##### `S3OriginConfig`<sup>Required</sup> <a name="S3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig"></a>

```go
func S3OriginConfig() CloudfrontDistributionOriginS3OriginConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a>

---

##### `ConnectionAttemptsInput`<sup>Optional</sup> <a name="ConnectionAttemptsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput"></a>

```go
func ConnectionAttemptsInput() *f64
```

- *Type:* *f64

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput"></a>

```go
func ConnectionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput"></a>

```go
func CustomHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `CustomOriginConfigInput`<sup>Optional</sup> <a name="CustomOriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput"></a>

```go
func CustomOriginConfigInput() CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `OriginAccessControlIdInput`<sup>Optional</sup> <a name="OriginAccessControlIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput"></a>

```go
func OriginAccessControlIdInput() *string
```

- *Type:* *string

---

##### `OriginIdInput`<sup>Optional</sup> <a name="OriginIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput"></a>

```go
func OriginIdInput() *string
```

- *Type:* *string

---

##### `OriginPathInput`<sup>Optional</sup> <a name="OriginPathInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput"></a>

```go
func OriginPathInput() *string
```

- *Type:* *string

---

##### `OriginShieldInput`<sup>Optional</sup> <a name="OriginShieldInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput"></a>

```go
func OriginShieldInput() CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `S3OriginConfigInput`<sup>Optional</sup> <a name="S3OriginConfigInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput"></a>

```go
func S3OriginConfigInput() CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `ConnectionAttempts`<sup>Required</sup> <a name="ConnectionAttempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts"></a>

```go
func ConnectionAttempts() *f64
```

- *Type:* *f64

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout"></a>

```go
func ConnectionTimeout() *f64
```

- *Type:* *f64

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `OriginAccessControlId`<sup>Required</sup> <a name="OriginAccessControlId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId"></a>

```go
func OriginAccessControlId() *string
```

- *Type:* *string

---

##### `OriginId`<sup>Required</sup> <a name="OriginId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId"></a>

```go
func OriginId() *string
```

- *Type:* *string

---

##### `OriginPath`<sup>Required</sup> <a name="OriginPath" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath"></a>

```go
func OriginPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionOriginS3OriginConfigOutputReference <a name="CloudfrontDistributionOriginS3OriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionOriginS3OriginConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionOriginS3OriginConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput">OriginAccessIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity">OriginAccessIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginAccessIdentityInput`<sup>Optional</sup> <a name="OriginAccessIdentityInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput"></a>

```go
func OriginAccessIdentityInput() *string
```

- *Type:* *string

---

##### `OriginAccessIdentity`<sup>Required</sup> <a name="OriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity"></a>

```go
func OriginAccessIdentity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---


### CloudfrontDistributionRestrictionsGeoRestrictionOutputReference <a name="CloudfrontDistributionRestrictionsGeoRestrictionOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionRestrictionsGeoRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionRestrictionsGeoRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations"></a>

```go
func ResetLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput">RestrictionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionTypeInput`<sup>Optional</sup> <a name="RestrictionTypeInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```go
func RestrictionTypeInput() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType"></a>

```go
func RestrictionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


### CloudfrontDistributionRestrictionsOutputReference <a name="CloudfrontDistributionRestrictionsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoRestriction` <a name="PutGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction"></a>

```go
func PutGeoRestriction(value CloudfrontDistributionRestrictionsGeoRestriction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput">GeoRestrictionInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction"></a>

```go
func GeoRestriction() CloudfrontDistributionRestrictionsGeoRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a>

---

##### `GeoRestrictionInput`<sup>Optional</sup> <a name="GeoRestrictionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput"></a>

```go
func GeoRestrictionInput() CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---


### CloudfrontDistributionTrustedKeyGroupsItemsList <a name="CloudfrontDistributionTrustedKeyGroupsItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedKeyGroupsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTrustedKeyGroupsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTrustedKeyGroupsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudfrontDistributionTrustedKeyGroupsItemsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedKeyGroupsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTrustedKeyGroupsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId">KeyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds">KeyPairIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyGroupId`<sup>Required</sup> <a name="KeyGroupId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId"></a>

```go
func KeyGroupId() *string
```

- *Type:* *string

---

##### `KeyPairIds`<sup>Required</sup> <a name="KeyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds"></a>

```go
func KeyPairIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionTrustedKeyGroupsItems
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a>

---


### CloudfrontDistributionTrustedKeyGroupsList <a name="CloudfrontDistributionTrustedKeyGroupsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedKeyGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTrustedKeyGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTrustedKeyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudfrontDistributionTrustedKeyGroupsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedKeyGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTrustedKeyGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items"></a>

```go
func Items() CloudfrontDistributionTrustedKeyGroupsItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionTrustedKeyGroups
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a>

---


### CloudfrontDistributionTrustedSignersItemsList <a name="CloudfrontDistributionTrustedSignersItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedSignersItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTrustedSignersItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTrustedSignersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudfrontDistributionTrustedSignersItemsOutputReference <a name="CloudfrontDistributionTrustedSignersItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedSignersItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTrustedSignersItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber">AwsAccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds">KeyPairIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountNumber`<sup>Required</sup> <a name="AwsAccountNumber" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber"></a>

```go
func AwsAccountNumber() *string
```

- *Type:* *string

---

##### `KeyPairIds`<sup>Required</sup> <a name="KeyPairIds" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds"></a>

```go
func KeyPairIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionTrustedSignersItems
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a>

---


### CloudfrontDistributionTrustedSignersList <a name="CloudfrontDistributionTrustedSignersList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedSignersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTrustedSignersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTrustedSignersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudfrontDistributionTrustedSignersOutputReference <a name="CloudfrontDistributionTrustedSignersOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionTrustedSignersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTrustedSignersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items"></a>

```go
func Items() CloudfrontDistributionTrustedSignersItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionTrustedSigners
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a>

---


### CloudfrontDistributionViewerCertificateOutputReference <a name="CloudfrontDistributionViewerCertificateOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontdistribution"

cloudfrontdistribution.NewCloudfrontDistributionViewerCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionViewerCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcmCertificateArn` <a name="ResetAcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn"></a>

```go
func ResetAcmCertificateArn()
```

##### `ResetCloudfrontDefaultCertificate` <a name="ResetCloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate"></a>

```go
func ResetCloudfrontDefaultCertificate()
```

##### `ResetIamCertificateId` <a name="ResetIamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId"></a>

```go
func ResetIamCertificateId()
```

##### `ResetMinimumProtocolVersion` <a name="ResetMinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion"></a>

```go
func ResetMinimumProtocolVersion()
```

##### `ResetSslSupportMethod` <a name="ResetSslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod"></a>

```go
func ResetSslSupportMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput">AcmCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput">CloudfrontDefaultCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput">IamCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput">MinimumProtocolVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput">SslSupportMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate">CloudfrontDefaultCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId">IamCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion">MinimumProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod">SslSupportMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcmCertificateArnInput`<sup>Optional</sup> <a name="AcmCertificateArnInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput"></a>

```go
func AcmCertificateArnInput() *string
```

- *Type:* *string

---

##### `CloudfrontDefaultCertificateInput`<sup>Optional</sup> <a name="CloudfrontDefaultCertificateInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput"></a>

```go
func CloudfrontDefaultCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `IamCertificateIdInput`<sup>Optional</sup> <a name="IamCertificateIdInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput"></a>

```go
func IamCertificateIdInput() *string
```

- *Type:* *string

---

##### `MinimumProtocolVersionInput`<sup>Optional</sup> <a name="MinimumProtocolVersionInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput"></a>

```go
func MinimumProtocolVersionInput() *string
```

- *Type:* *string

---

##### `SslSupportMethodInput`<sup>Optional</sup> <a name="SslSupportMethodInput" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput"></a>

```go
func SslSupportMethodInput() *string
```

- *Type:* *string

---

##### `AcmCertificateArn`<sup>Required</sup> <a name="AcmCertificateArn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn"></a>

```go
func AcmCertificateArn() *string
```

- *Type:* *string

---

##### `CloudfrontDefaultCertificate`<sup>Required</sup> <a name="CloudfrontDefaultCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate"></a>

```go
func CloudfrontDefaultCertificate() interface{}
```

- *Type:* interface{}

---

##### `IamCertificateId`<sup>Required</sup> <a name="IamCertificateId" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId"></a>

```go
func IamCertificateId() *string
```

- *Type:* *string

---

##### `MinimumProtocolVersion`<sup>Required</sup> <a name="MinimumProtocolVersion" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion"></a>

```go
func MinimumProtocolVersion() *string
```

- *Type:* *string

---

##### `SslSupportMethod`<sup>Required</sup> <a name="SslSupportMethod" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod"></a>

```go
func SslSupportMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---



