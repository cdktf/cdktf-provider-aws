# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktf/provider-aws.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet aws_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleet(scope Construct, id *string, config GameliftFleetConfig) GameliftFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration">PutCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission">PutEc2InboundPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">PutResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration">PutRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetBuildId">ResetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration">ResetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission">ResetEc2InboundPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn">ResetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups">ResetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">ResetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">ResetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">ResetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetScriptId">ResetScriptId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCertificateConfiguration` <a name="PutCertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```go
func PutCertificateConfiguration(value GameliftFleetCertificateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `PutEc2InboundPermission` <a name="PutEc2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission"></a>

```go
func PutEc2InboundPermission(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceCreationLimitPolicy` <a name="PutResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```go
func PutResourceCreationLimitPolicy(value GameliftFleetResourceCreationLimitPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `PutRuntimeConfiguration` <a name="PutRuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```go
func PutRuntimeConfiguration(value GameliftFleetRuntimeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts"></a>

```go
func PutTimeouts(value GameliftFleetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

---

##### `ResetBuildId` <a name="ResetBuildId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetBuildId"></a>

```go
func ResetBuildId()
```

##### `ResetCertificateConfiguration` <a name="ResetCertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```go
func ResetCertificateConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEc2InboundPermission` <a name="ResetEc2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission"></a>

```go
func ResetEc2InboundPermission()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetFleetType"></a>

```go
func ResetFleetType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceRoleArn` <a name="ResetInstanceRoleArn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```go
func ResetInstanceRoleArn()
```

##### `ResetMetricGroups` <a name="ResetMetricGroups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```go
func ResetMetricGroups()
```

##### `ResetNewGameSessionProtectionPolicy` <a name="ResetNewGameSessionProtectionPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```go
func ResetNewGameSessionProtectionPolicy()
```

##### `ResetResourceCreationLimitPolicy` <a name="ResetResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```go
func ResetResourceCreationLimitPolicy()
```

##### `ResetRuntimeConfiguration` <a name="ResetRuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```go
func ResetRuntimeConfiguration()
```

##### `ResetScriptId` <a name="ResetScriptId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetScriptId"></a>

```go
func ResetScriptId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.GameliftFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.GameliftFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.GameliftFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildArn">BuildArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission">Ec2InboundPermission</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.logPaths">LogPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn">ScriptArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput">BuildIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">CertificateConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput">Ec2InboundPermissionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">Ec2InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">InstanceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput">MetricGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">NewGameSessionProtectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">ResourceCreationLimitPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">RuntimeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput">ScriptIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildId">BuildId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetType">FleetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups">MetricGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptId">ScriptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BuildArn`<sup>Required</sup> <a name="BuildArn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildArn"></a>

```go
func BuildArn() *string
```

- *Type:* *string

---

##### `CertificateConfiguration`<sup>Required</sup> <a name="CertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```go
func CertificateConfiguration() GameliftFleetCertificateConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `Ec2InboundPermission`<sup>Required</sup> <a name="Ec2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission"></a>

```go
func Ec2InboundPermission() GameliftFleetEc2InboundPermissionList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a>

---

##### `LogPaths`<sup>Required</sup> <a name="LogPaths" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.logPaths"></a>

```go
func LogPaths() *[]*string
```

- *Type:* *[]*string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `ResourceCreationLimitPolicy`<sup>Required</sup> <a name="ResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```go
func ResourceCreationLimitPolicy() GameliftFleetResourceCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `RuntimeConfiguration`<sup>Required</sup> <a name="RuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```go
func RuntimeConfiguration() GameliftFleetRuntimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `ScriptArn`<sup>Required</sup> <a name="ScriptArn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn"></a>

```go
func ScriptArn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeouts"></a>

```go
func Timeouts() GameliftFleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a>

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```go
func BuildIdInput() *string
```

- *Type:* *string

---

##### `CertificateConfigurationInput`<sup>Optional</sup> <a name="CertificateConfigurationInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```go
func CertificateConfigurationInput() GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Ec2InboundPermissionInput`<sup>Optional</sup> <a name="Ec2InboundPermissionInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput"></a>

```go
func Ec2InboundPermissionInput() interface{}
```

- *Type:* interface{}

---

##### `Ec2InstanceTypeInput`<sup>Optional</sup> <a name="Ec2InstanceTypeInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```go
func Ec2InstanceTypeInput() *string
```

- *Type:* *string

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```go
func FleetTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceRoleArnInput`<sup>Optional</sup> <a name="InstanceRoleArnInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```go
func InstanceRoleArnInput() *string
```

- *Type:* *string

---

##### `MetricGroupsInput`<sup>Optional</sup> <a name="MetricGroupsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```go
func MetricGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicyInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```go
func NewGameSessionProtectionPolicyInput() *string
```

- *Type:* *string

---

##### `ResourceCreationLimitPolicyInput`<sup>Optional</sup> <a name="ResourceCreationLimitPolicyInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```go
func ResourceCreationLimitPolicyInput() GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `RuntimeConfigurationInput`<sup>Optional</sup> <a name="RuntimeConfigurationInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```go
func RuntimeConfigurationInput() GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```go
func ScriptIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildId"></a>

```go
func BuildId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```go
func Ec2InstanceType() *string
```

- *Type:* *string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetType"></a>

```go
func FleetType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```go
func InstanceRoleArn() *string
```

- *Type:* *string

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```go
func MetricGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```go
func NewGameSessionProtectionPolicy() *string
```

- *Type:* *string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptId"></a>

```go
func ScriptId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetCertificateConfiguration {
	CertificateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">CertificateType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `CertificateType`<sup>Optional</sup> <a name="CertificateType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```go
CertificateType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ec2InstanceType: *string,
	Name: *string,
	BuildId: *string,
	CertificateConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftFleet.GameliftFleetCertificateConfiguration,
	Description: *string,
	Ec2InboundPermission: interface{},
	FleetType: *string,
	Id: *string,
	InstanceRoleArn: *string,
	MetricGroups: *[]*string,
	NewGameSessionProtectionPolicy: *string,
	ResourceCreationLimitPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy,
	RuntimeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftFleet.GameliftFleetRuntimeConfiguration,
	ScriptId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftFleet.GameliftFleetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId">BuildId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | certificate_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission">Ec2InboundPermission</a></code> | <code>interface{}</code> | ec2_inbound_permission block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType">FleetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups">MetricGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | resource_creation_limit_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | runtime_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId">ScriptId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```go
Ec2InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}.

---

##### `BuildId`<sup>Optional</sup> <a name="BuildId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```go
BuildId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}.

---

##### `CertificateConfiguration`<sup>Optional</sup> <a name="CertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```go
CertificateConfiguration GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

certificate_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}.

---

##### `Ec2InboundPermission`<sup>Optional</sup> <a name="Ec2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission"></a>

```go
Ec2InboundPermission interface{}
```

- *Type:* interface{}

ec2_inbound_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```go
FleetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceRoleArn`<sup>Optional</sup> <a name="InstanceRoleArn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```go
InstanceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}.

---

##### `MetricGroups`<sup>Optional</sup> <a name="MetricGroups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```go
MetricGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}.

---

##### `NewGameSessionProtectionPolicy`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```go
NewGameSessionProtectionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}.

---

##### `ResourceCreationLimitPolicy`<sup>Optional</sup> <a name="ResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```go
ResourceCreationLimitPolicy GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

resource_creation_limit_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `RuntimeConfiguration`<sup>Optional</sup> <a name="RuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```go
RuntimeConfiguration GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

runtime_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `ScriptId`<sup>Optional</sup> <a name="ScriptId" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```go
ScriptId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts"></a>

```go
Timeouts GameliftFleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#timeouts GameliftFleet#timeouts}

---

### GameliftFleetEc2InboundPermission <a name="GameliftFleetEc2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetEc2InboundPermission {
	FromPort: *f64,
	IpRange: *string,
	Protocol: *string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#from_port GameliftFleet#from_port}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange">IpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ip_range GameliftFleet#ip_range}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#protocol GameliftFleet#protocol}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#to_port GameliftFleet#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#from_port GameliftFleet#from_port}.

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ip_range GameliftFleet#ip_range}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#protocol GameliftFleet#protocol}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#to_port GameliftFleet#to_port}.

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetResourceCreationLimitPolicy {
	NewGameSessionsPerCreator: *f64,
	PolicyPeriodInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}. |

---

##### `NewGameSessionsPerCreator`<sup>Optional</sup> <a name="NewGameSessionsPerCreator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```go
NewGameSessionsPerCreator *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}.

---

##### `PolicyPeriodInMinutes`<sup>Optional</sup> <a name="PolicyPeriodInMinutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```go
PolicyPeriodInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}.

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetRuntimeConfiguration {
	GameSessionActivationTimeoutSeconds: *f64,
	MaxConcurrentGameSessionActivations: *f64,
	ServerProcess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess">ServerProcess</a></code> | <code>interface{}</code> | server_process block. |

---

##### `GameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```go
GameSessionActivationTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}.

---

##### `MaxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```go
MaxConcurrentGameSessionActivations *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}.

---

##### `ServerProcess`<sup>Optional</sup> <a name="ServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess"></a>

```go
ServerProcess interface{}
```

- *Type:* interface{}

server_process block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#server_process GameliftFleet#server_process}

---

### GameliftFleetRuntimeConfigurationServerProcess <a name="GameliftFleetRuntimeConfigurationServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetRuntimeConfigurationServerProcess {
	ConcurrentExecutions: *f64,
	LaunchPath: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath">LaunchPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#launch_path GameliftFleet#launch_path}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#parameters GameliftFleet#parameters}. |

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions"></a>

```go
ConcurrentExecutions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}.

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath"></a>

```go
LaunchPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#launch_path GameliftFleet#launch_path}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#parameters GameliftFleet#parameters}.

---

### GameliftFleetTimeouts <a name="GameliftFleetTimeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

&gameliftfleet.GameliftFleetTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetCertificateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftFleetCertificateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">ResetCertificateType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateType` <a name="ResetCertificateType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```go
func ResetCertificateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```go
func CertificateTypeInput() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionList <a name="GameliftFleetEc2InboundPermissionList" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetEc2InboundPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftFleetEc2InboundPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get"></a>

```go
func Get(index *f64) GameliftFleetEc2InboundPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftFleetEc2InboundPermissionOutputReference <a name="GameliftFleetEc2InboundPermissionOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetEc2InboundPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftFleetEc2InboundPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetResourceCreationLimitPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftFleetResourceCreationLimitPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">ResetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">ResetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewGameSessionsPerCreator` <a name="ResetNewGameSessionsPerCreator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```go
func ResetNewGameSessionsPerCreator()
```

##### `ResetPolicyPeriodInMinutes` <a name="ResetPolicyPeriodInMinutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```go
func ResetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">NewGameSessionsPerCreatorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">PolicyPeriodInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="NewGameSessionsPerCreatorInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```go
func NewGameSessionsPerCreatorInput() *f64
```

- *Type:* *f64

---

##### `PolicyPeriodInMinutesInput`<sup>Optional</sup> <a name="PolicyPeriodInMinutesInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```go
func PolicyPeriodInMinutesInput() *f64
```

- *Type:* *f64

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```go
func NewGameSessionsPerCreator() *f64
```

- *Type:* *f64

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```go
func PolicyPeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetRuntimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftFleetRuntimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess">PutServerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">ResetGameSessionActivationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">ResetMaxConcurrentGameSessionActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess">ResetServerProcess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerProcess` <a name="PutServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess"></a>

```go
func PutServerProcess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGameSessionActivationTimeoutSeconds` <a name="ResetGameSessionActivationTimeoutSeconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```go
func ResetGameSessionActivationTimeoutSeconds()
```

##### `ResetMaxConcurrentGameSessionActivations` <a name="ResetMaxConcurrentGameSessionActivations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```go
func ResetMaxConcurrentGameSessionActivations()
```

##### `ResetServerProcess` <a name="ResetServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess"></a>

```go
func ResetServerProcess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess">ServerProcess</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">GameSessionActivationTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">MaxConcurrentGameSessionActivationsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput">ServerProcessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerProcess`<sup>Required</sup> <a name="ServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess"></a>

```go
func ServerProcess() GameliftFleetRuntimeConfigurationServerProcessList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a>

---

##### `GameSessionActivationTimeoutSecondsInput`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSecondsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```go
func GameSessionActivationTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentGameSessionActivationsInput`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivationsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```go
func MaxConcurrentGameSessionActivationsInput() *f64
```

- *Type:* *f64

---

##### `ServerProcessInput`<sup>Optional</sup> <a name="ServerProcessInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput"></a>

```go
func ServerProcessInput() interface{}
```

- *Type:* interface{}

---

##### `GameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```go
func GameSessionActivationTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentGameSessionActivations`<sup>Required</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```go
func MaxConcurrentGameSessionActivations() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessList <a name="GameliftFleetRuntimeConfigurationServerProcessList" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetRuntimeConfigurationServerProcessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftFleetRuntimeConfigurationServerProcessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get"></a>

```go
func Get(index *f64) GameliftFleetRuntimeConfigurationServerProcessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftFleetRuntimeConfigurationServerProcessOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetRuntimeConfigurationServerProcessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftFleetRuntimeConfigurationServerProcessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput">ConcurrentExecutionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput">LaunchPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath">LaunchPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrentExecutionsInput`<sup>Optional</sup> <a name="ConcurrentExecutionsInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput"></a>

```go
func ConcurrentExecutionsInput() *f64
```

- *Type:* *f64

---

##### `LaunchPathInput`<sup>Optional</sup> <a name="LaunchPathInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput"></a>

```go
func LaunchPathInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions"></a>

```go
func ConcurrentExecutions() *f64
```

- *Type:* *f64

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath"></a>

```go
func LaunchPath() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftFleetTimeoutsOutputReference <a name="GameliftFleetTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftfleet"

gameliftfleet.NewGameliftFleetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftFleetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



