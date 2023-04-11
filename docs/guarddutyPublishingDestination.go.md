# `guarddutyPublishingDestination` Submodule <a name="`guarddutyPublishingDestination` Submodule" id="@cdktf/provider-aws.guarddutyPublishingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyPublishingDestination <a name="GuarddutyPublishingDestination" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination aws_guardduty_publishing_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutypublishingdestination"

guarddutypublishingdestination.NewGuarddutyPublishingDestination(scope Construct, id *string, config GuarddutyPublishingDestinationConfig) GuarddutyPublishingDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig">GuarddutyPublishingDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig">GuarddutyPublishingDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutypublishingdestination"

guarddutypublishingdestination.GuarddutyPublishingDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutypublishingdestination"

guarddutypublishingdestination.GuarddutyPublishingDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutypublishingdestination"

guarddutypublishingdestination.GuarddutyPublishingDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyPublishingDestinationConfig <a name="GuarddutyPublishingDestinationConfig" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutypublishingdestination"

&guarddutypublishingdestination.GuarddutyPublishingDestinationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationArn: *string,
	DetectorId: *string,
	KmsKeyArn: *string,
	DestinationType: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#destination_arn GuarddutyPublishingDestination#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}. |
| <code><a href="#@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#id GuarddutyPublishingDestination#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#destination_arn GuarddutyPublishingDestination#destination_arn}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}.

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination#id GuarddutyPublishingDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



