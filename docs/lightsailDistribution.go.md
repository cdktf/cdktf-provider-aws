# `lightsailDistribution` Submodule <a name="`lightsailDistribution` Submodule" id="@cdktf/provider-aws.lightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDistribution <a name="LightsailDistribution" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution aws_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistribution(scope Construct, id *string, config LightsailDistributionConfig) LightsailDistribution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior">PutCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings">PutCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior">PutDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehavior">ResetCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings">ResetCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCacheBehavior` <a name="PutCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior"></a>

```go
func PutCacheBehavior(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCacheBehaviorSettings` <a name="PutCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings"></a>

```go
func PutCacheBehaviorSettings(value LightsailDistributionCacheBehaviorSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `PutDefaultCacheBehavior` <a name="PutDefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior"></a>

```go
func PutDefaultCacheBehavior(value LightsailDistributionDefaultCacheBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin"></a>

```go
func PutOrigin(value LightsailDistributionOrigin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts"></a>

```go
func PutTimeouts(value LightsailDistributionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

---

##### `ResetCacheBehavior` <a name="ResetCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehavior"></a>

```go
func ResetCacheBehavior()
```

##### `ResetCacheBehaviorSettings` <a name="ResetCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings"></a>

```go
func ResetCacheBehaviorSettings()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.LightsailDistribution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.LightsailDistribution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.LightsailDistribution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.alternativeDomainNames">AlternativeDomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehavior">CacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList">LightsailDistributionCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings">CacheBehaviorSettings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList">LightsailDistributionLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originPublicDns">OriginPublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.supportCode">SupportCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference">LightsailDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorInput">CacheBehaviorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput">CacheBehaviorSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput">DefaultCacheBehaviorInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originInput">OriginInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternativeDomainNames`<sup>Required</sup> <a name="AlternativeDomainNames" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.alternativeDomainNames"></a>

```go
func AlternativeDomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CacheBehavior`<sup>Required</sup> <a name="CacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehavior"></a>

```go
func CacheBehavior() LightsailDistributionCacheBehaviorList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList">LightsailDistributionCacheBehaviorList</a>

---

##### `CacheBehaviorSettings`<sup>Required</sup> <a name="CacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings"></a>

```go
func CacheBehaviorSettings() LightsailDistributionCacheBehaviorSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior"></a>

```go
func DefaultCacheBehavior() LightsailDistributionDefaultCacheBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.location"></a>

```go
func Location() LightsailDistributionLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList">LightsailDistributionLocationList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.origin"></a>

```go
func Origin() LightsailDistributionOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a>

---

##### `OriginPublicDns`<sup>Required</sup> <a name="OriginPublicDns" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originPublicDns"></a>

```go
func OriginPublicDns() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.supportCode"></a>

```go
func SupportCode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeouts"></a>

```go
func Timeouts() LightsailDistributionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference">LightsailDistributionTimeoutsOutputReference</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `CacheBehaviorInput`<sup>Optional</sup> <a name="CacheBehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorInput"></a>

```go
func CacheBehaviorInput() interface{}
```

- *Type:* interface{}

---

##### `CacheBehaviorSettingsInput`<sup>Optional</sup> <a name="CacheBehaviorSettingsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput"></a>

```go
func CacheBehaviorSettingsInput() LightsailDistributionCacheBehaviorSettings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `DefaultCacheBehaviorInput`<sup>Optional</sup> <a name="DefaultCacheBehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput"></a>

```go
func DefaultCacheBehaviorInput() LightsailDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originInput"></a>

```go
func OriginInput() LightsailDistributionOrigin
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDistributionCacheBehavior <a name="LightsailDistributionCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionCacheBehavior {
	Behavior: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.behavior">Behavior</a></code> | <code>*string</code> | The cache behavior for the specified path. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.path">Path</a></code> | <code>*string</code> | The path to a directory or file to cached, or not cache. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

The cache behavior for the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path to a directory or file to cached, or not cache.

Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#path LightsailDistribution#path}

---

### LightsailDistributionCacheBehaviorSettings <a name="LightsailDistributionCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionCacheBehaviorSettings {
	AllowedHttpMethods: *string,
	CachedHttpMethods: *string,
	DefaultTtl: *f64,
	ForwardedCookies: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies,
	ForwardedHeaders: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders,
	ForwardedQueryStrings: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings,
	MaximumTtl: *f64,
	MinimumTtl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*string</code> | The HTTP methods that are processed and forwarded to the distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods">CachedHttpMethods</a></code> | <code>*string</code> | The HTTP method responses that are cached by your distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies">ForwardedCookies</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | forwarded_cookies block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders">ForwardedHeaders</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | forwarded_headers block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings">ForwardedQueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | forwarded_query_strings block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl">MaximumTtl</a></code> | <code>*f64</code> | The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl">MinimumTtl</a></code> | <code>*f64</code> | The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

```go
AllowedHttpMethods *string
```

- *Type:* *string

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

##### `CachedHttpMethods`<sup>Optional</sup> <a name="CachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

```go
CachedHttpMethods *string
```

- *Type:* *string

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

##### `ForwardedCookies`<sup>Optional</sup> <a name="ForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

```go
ForwardedCookies LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

forwarded_cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

##### `ForwardedHeaders`<sup>Optional</sup> <a name="ForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

```go
ForwardedHeaders LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

forwarded_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

##### `ForwardedQueryStrings`<sup>Optional</sup> <a name="ForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

```go
ForwardedQueryStrings LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

forwarded_query_strings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

##### `MaximumTtl`<sup>Optional</sup> <a name="MaximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl"></a>

```go
MaximumTtl *f64
```

- *Type:* *f64

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

##### `MinimumTtl`<sup>Optional</sup> <a name="MinimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl"></a>

```go
MinimumTtl *f64
```

- *Type:* *f64

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

### LightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies {
	CookiesAllowList: *[]*string,
	Option: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList">CookiesAllowList</a></code> | <code>*[]*string</code> | The specific cookies to forward to your distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option">Option</a></code> | <code>*string</code> | Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter. |

---

##### `CookiesAllowList`<sup>Optional</sup> <a name="CookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

```go
CookiesAllowList *[]*string
```

- *Type:* *[]*string

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

```go
Option *string
```

- *Type:* *string

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders {
	HeadersAllowList: *[]*string,
	Option: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList">HeadersAllowList</a></code> | <code>*[]*string</code> | The specific headers to forward to your distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option">Option</a></code> | <code>*string</code> | The headers that you want your distribution to forward to your origin and base caching on. |

---

##### `HeadersAllowList`<sup>Optional</sup> <a name="HeadersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

```go
HeadersAllowList *[]*string
```

- *Type:* *[]*string

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

```go
Option *string
```

- *Type:* *string

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings {
	Option: interface{},
	QueryStringsAllowedList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option">Option</a></code> | <code>interface{}</code> | Indicates whether the distribution forwards and caches based on query strings. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowedList">QueryStringsAllowedList</a></code> | <code>*[]*string</code> | The specific query strings that the distribution forwards to the origin. |

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

```go
Option interface{}
```

- *Type:* interface{}

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#option LightsailDistribution#option}

---

##### `QueryStringsAllowedList`<sup>Optional</sup> <a name="QueryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowedList"></a>

```go
QueryStringsAllowedList *[]*string
```

- *Type:* *[]*string

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#query_strings_allowed_list LightsailDistribution#query_strings_allowed_list}

---

### LightsailDistributionConfig <a name="LightsailDistributionConfig" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BundleId: *string,
	DefaultCacheBehavior: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior,
	Name: *string,
	Origin: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionOrigin,
	CacheBehavior: interface{},
	CacheBehaviorSettings: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings,
	CertificateName: *string,
	Id: *string,
	IpAddressType: *string,
	IsEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailDistribution.LightsailDistributionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehavior">CacheBehavior</a></code> | <code>interface{}</code> | cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings">CacheBehaviorSettings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | cache_behavior_settings block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.certificateName">CertificateName</a></code> | <code>*string</code> | The name of the SSL/TLS certificate attached to the distribution, if any. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#id LightsailDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | The IP address type of the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#tags LightsailDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#tags_all LightsailDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior"></a>

```go
DefaultCacheBehavior LightsailDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the distribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#name LightsailDistribution#name}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.origin"></a>

```go
Origin LightsailDistributionOrigin
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `CacheBehavior`<sup>Optional</sup> <a name="CacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehavior"></a>

```go
CacheBehavior interface{}
```

- *Type:* interface{}

cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#cache_behavior LightsailDistribution#cache_behavior}

---

##### `CacheBehaviorSettings`<sup>Optional</sup> <a name="CacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings"></a>

```go
CacheBehaviorSettings LightsailDistributionCacheBehaviorSettings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

cache_behavior_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

The name of the SSL/TLS certificate attached to the distribution, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#id LightsailDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

The IP address type of the distribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#tags LightsailDistribution#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#tags_all LightsailDistribution#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.timeouts"></a>

```go
Timeouts LightsailDistributionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#timeouts LightsailDistribution#timeouts}

---

### LightsailDistributionDefaultCacheBehavior <a name="LightsailDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionDefaultCacheBehavior {
	Behavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior">Behavior</a></code> | <code>*string</code> | The cache behavior of the distribution. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#behavior LightsailDistribution#behavior}

---

### LightsailDistributionLocation <a name="LightsailDistributionLocation" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionLocation {

}
```


### LightsailDistributionOrigin <a name="LightsailDistributionOrigin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionOrigin {
	Name: *string,
	RegionName: *string,
	ProtocolPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.name">Name</a></code> | <code>*string</code> | The name of the origin resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.regionName">RegionName</a></code> | <code>*string</code> | The AWS Region name of the origin resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy">ProtocolPolicy</a></code> | <code>*string</code> | The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the origin resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#name LightsailDistribution#name}

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#region_name LightsailDistribution#region_name}

---

##### `ProtocolPolicy`<sup>Optional</sup> <a name="ProtocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy"></a>

```go
ProtocolPolicy *string
```

- *Type:* *string

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

### LightsailDistributionTimeouts <a name="LightsailDistributionTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

&lightsaildistribution.LightsailDistributionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#create LightsailDistribution#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#delete LightsailDistribution#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#update LightsailDistribution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#create LightsailDistribution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#delete LightsailDistribution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_distribution#update LightsailDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDistributionCacheBehaviorList <a name="LightsailDistributionCacheBehaviorList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailDistributionCacheBehaviorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get"></a>

```go
func Get(index *f64) LightsailDistributionCacheBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailDistributionCacheBehaviorOutputReference <a name="LightsailDistributionCacheBehaviorOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailDistributionCacheBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList">ResetCookiesAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption">ResetOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookiesAllowList` <a name="ResetCookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList"></a>

```go
func ResetCookiesAllowList()
```

##### `ResetOption` <a name="ResetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption"></a>

```go
func ResetOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput">CookiesAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput">OptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">CookiesAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">Option</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookiesAllowListInput`<sup>Optional</sup> <a name="CookiesAllowListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput"></a>

```go
func CookiesAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput"></a>

```go
func OptionInput() *string
```

- *Type:* *string

---

##### `CookiesAllowList`<sup>Required</sup> <a name="CookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```go
func CookiesAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```go
func Option() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList">ResetHeadersAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption">ResetOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeadersAllowList` <a name="ResetHeadersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList"></a>

```go
func ResetHeadersAllowList()
```

##### `ResetOption` <a name="ResetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption"></a>

```go
func ResetOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput">HeadersAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput">OptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">HeadersAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">Option</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadersAllowListInput`<sup>Optional</sup> <a name="HeadersAllowListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput"></a>

```go
func HeadersAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput"></a>

```go
func OptionInput() *string
```

- *Type:* *string

---

##### `HeadersAllowList`<sup>Required</sup> <a name="HeadersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```go
func HeadersAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```go
func Option() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption">ResetOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowedList">ResetQueryStringsAllowedList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOption` <a name="ResetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption"></a>

```go
func ResetOption()
```

##### `ResetQueryStringsAllowedList` <a name="ResetQueryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowedList"></a>

```go
func ResetQueryStringsAllowedList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput">OptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedListInput">QueryStringsAllowedListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">Option</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedList">QueryStringsAllowedList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput"></a>

```go
func OptionInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringsAllowedListInput`<sup>Optional</sup> <a name="QueryStringsAllowedListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedListInput"></a>

```go
func QueryStringsAllowedListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```go
func Option() interface{}
```

- *Type:* interface{}

---

##### `QueryStringsAllowedList`<sup>Required</sup> <a name="QueryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedList"></a>

```go
func QueryStringsAllowedList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### LightsailDistributionCacheBehaviorSettingsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionCacheBehaviorSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionCacheBehaviorSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies">PutForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders">PutForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings">PutForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods">ResetCachedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies">ResetForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders">ResetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings">ResetForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl">ResetMaximumTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl">ResetMinimumTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedCookies` <a name="PutForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies"></a>

```go
func PutForwardedCookies(value LightsailDistributionCacheBehaviorSettingsForwardedCookies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `PutForwardedHeaders` <a name="PutForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders"></a>

```go
func PutForwardedHeaders(value LightsailDistributionCacheBehaviorSettingsForwardedHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `PutForwardedQueryStrings` <a name="PutForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings"></a>

```go
func PutForwardedQueryStrings(value LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods"></a>

```go
func ResetAllowedHttpMethods()
```

##### `ResetCachedHttpMethods` <a name="ResetCachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods"></a>

```go
func ResetCachedHttpMethods()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetForwardedCookies` <a name="ResetForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies"></a>

```go
func ResetForwardedCookies()
```

##### `ResetForwardedHeaders` <a name="ResetForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders"></a>

```go
func ResetForwardedHeaders()
```

##### `ResetForwardedQueryStrings` <a name="ResetForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings"></a>

```go
func ResetForwardedQueryStrings()
```

##### `ResetMaximumTtl` <a name="ResetMaximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl"></a>

```go
func ResetMaximumTtl()
```

##### `ResetMinimumTtl` <a name="ResetMinimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl"></a>

```go
func ResetMinimumTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">ForwardedCookies</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">ForwardedHeaders</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">ForwardedQueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput">CachedHttpMethodsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput">ForwardedCookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput">ForwardedHeadersInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput">ForwardedQueryStringsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput">MaximumTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput">MinimumTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">CachedHttpMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">MaximumTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">MinimumTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedCookies`<sup>Required</sup> <a name="ForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```go
func ForwardedCookies() LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `ForwardedHeaders`<sup>Required</sup> <a name="ForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```go
func ForwardedHeaders() LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `ForwardedQueryStrings`<sup>Required</sup> <a name="ForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```go
func ForwardedQueryStrings() LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```go
func AllowedHttpMethodsInput() *string
```

- *Type:* *string

---

##### `CachedHttpMethodsInput`<sup>Optional</sup> <a name="CachedHttpMethodsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput"></a>

```go
func CachedHttpMethodsInput() *string
```

- *Type:* *string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `ForwardedCookiesInput`<sup>Optional</sup> <a name="ForwardedCookiesInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput"></a>

```go
func ForwardedCookiesInput() LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `ForwardedHeadersInput`<sup>Optional</sup> <a name="ForwardedHeadersInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput"></a>

```go
func ForwardedHeadersInput() LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `ForwardedQueryStringsInput`<sup>Optional</sup> <a name="ForwardedQueryStringsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput"></a>

```go
func ForwardedQueryStringsInput() LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `MaximumTtlInput`<sup>Optional</sup> <a name="MaximumTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput"></a>

```go
func MaximumTtlInput() *f64
```

- *Type:* *f64

---

##### `MinimumTtlInput`<sup>Optional</sup> <a name="MinimumTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput"></a>

```go
func MinimumTtlInput() *f64
```

- *Type:* *f64

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```go
func AllowedHttpMethods() *string
```

- *Type:* *string

---

##### `CachedHttpMethods`<sup>Required</sup> <a name="CachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```go
func CachedHttpMethods() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaximumTtl`<sup>Required</sup> <a name="MaximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```go
func MaximumTtl() *f64
```

- *Type:* *f64

---

##### `MinimumTtl`<sup>Required</sup> <a name="MinimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```go
func MinimumTtl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionCacheBehaviorSettings
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---


### LightsailDistributionDefaultCacheBehaviorOutputReference <a name="LightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionDefaultCacheBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionDefaultCacheBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---


### LightsailDistributionLocationList <a name="LightsailDistributionLocationList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailDistributionLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get"></a>

```go
func Get(index *f64) LightsailDistributionLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LightsailDistributionLocationOutputReference <a name="LightsailDistributionLocationOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailDistributionLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation">LightsailDistributionLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionLocation
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation">LightsailDistributionLocation</a>

---


### LightsailDistributionOriginOutputReference <a name="LightsailDistributionOriginOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy">ResetProtocolPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocolPolicy` <a name="ResetProtocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy"></a>

```go
func ResetProtocolPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput">ProtocolPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy">ProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolPolicyInput`<sup>Optional</sup> <a name="ProtocolPolicyInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput"></a>

```go
func ProtocolPolicyInput() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtocolPolicy`<sup>Required</sup> <a name="ProtocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```go
func ProtocolPolicy() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailDistributionOrigin
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---


### LightsailDistributionTimeoutsOutputReference <a name="LightsailDistributionTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsaildistribution"

lightsaildistribution.NewLightsailDistributionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailDistributionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



