# `sesEventDestination` Submodule <a name="`sesEventDestination` Submodule" id="@cdktf/provider-aws.sesEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEventDestination <a name="SesEventDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination aws_ses_event_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.NewSesEventDestination(scope Construct, id *string, config SesEventDestinationConfig) SesEventDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination">PutCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination">PutKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination">ResetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination">ResetKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudwatchDestination` <a name="PutCloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination"></a>

```go
func PutCloudwatchDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKinesisDestination` <a name="PutKinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination"></a>

```go
func PutKinesisDestination(value SesEventDestinationKinesisDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination"></a>

```go
func PutSnsDestination(value SesEventDestinationSnsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `ResetCloudwatchDestination` <a name="ResetCloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination"></a>

```go
func ResetCloudwatchDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetId"></a>

```go
func ResetId()
```

##### `ResetKinesisDestination` <a name="ResetKinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination"></a>

```go
func ResetKinesisDestination()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination"></a>

```go
func ResetSnsDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.SesEventDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.SesEventDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.SesEventDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination">KinesisDestination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput">CloudwatchDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput">KinesisDestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput">MatchingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput">SnsDestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes">MatchingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchDestination`<sup>Required</sup> <a name="CloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination"></a>

```go
func CloudwatchDestination() SesEventDestinationCloudwatchDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a>

---

##### `KinesisDestination`<sup>Required</sup> <a name="KinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination"></a>

```go
func KinesisDestination() SesEventDestinationKinesisDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination"></a>

```go
func SnsDestination() SesEventDestinationSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a>

---

##### `CloudwatchDestinationInput`<sup>Optional</sup> <a name="CloudwatchDestinationInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput"></a>

```go
func CloudwatchDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput"></a>

```go
func ConfigurationSetNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KinesisDestinationInput`<sup>Optional</sup> <a name="KinesisDestinationInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput"></a>

```go
func KinesisDestinationInput() SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `MatchingTypesInput`<sup>Optional</sup> <a name="MatchingTypesInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput"></a>

```go
func MatchingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput"></a>

```go
func SnsDestinationInput() SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchingTypes`<sup>Required</sup> <a name="MatchingTypes" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes"></a>

```go
func MatchingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEventDestinationCloudwatchDestination <a name="SesEventDestinationCloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

&seseventdestination.SesEventDestinationCloudwatchDestination {
	DefaultValue: *string,
	DimensionName: *string,
	ValueSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#default_value SesEventDestination#default_value}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName">DimensionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#dimension_name SesEventDestination#dimension_name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource">ValueSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#value_source SesEventDestination#value_source}. |

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#default_value SesEventDestination#default_value}.

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName"></a>

```go
DimensionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#dimension_name SesEventDestination#dimension_name}.

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource"></a>

```go
ValueSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#value_source SesEventDestination#value_source}.

---

### SesEventDestinationConfig <a name="SesEventDestinationConfig" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

&seseventdestination.SesEventDestinationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationSetName: *string,
	MatchingTypes: *[]*string,
	Name: *string,
	CloudwatchDestination: interface{},
	Enabled: interface{},
	Id: *string,
	KinesisDestination: github.com/cdktf/cdktf-provider-aws-go/aws.sesEventDestination.SesEventDestinationKinesisDestination,
	SnsDestination: github.com/cdktf/cdktf-provider-aws-go/aws.sesEventDestination.SesEventDestinationSnsDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes">MatchingTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code>interface{}</code> | cloudwatch_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination">KinesisDestination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | kinesis_destination block. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName"></a>

```go
ConfigurationSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}.

---

##### `MatchingTypes`<sup>Required</sup> <a name="MatchingTypes" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes"></a>

```go
MatchingTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}.

---

##### `CloudwatchDestination`<sup>Optional</sup> <a name="CloudwatchDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination"></a>

```go
CloudwatchDestination interface{}
```

- *Type:* interface{}

cloudwatch_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#id SesEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KinesisDestination`<sup>Optional</sup> <a name="KinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination"></a>

```go
KinesisDestination SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

kinesis_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination"></a>

```go
SnsDestination SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#sns_destination SesEventDestination#sns_destination}

---

### SesEventDestinationKinesisDestination <a name="SesEventDestinationKinesisDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

&seseventdestination.SesEventDestinationKinesisDestination {
	RoleArn: *string,
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn">StreamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}.

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}.

---

### SesEventDestinationSnsDestination <a name="SesEventDestinationSnsDestination" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

&seseventdestination.SesEventDestinationSnsDestination {
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEventDestinationCloudwatchDestinationList <a name="SesEventDestinationCloudwatchDestinationList" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.NewSesEventDestinationCloudwatchDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesEventDestinationCloudwatchDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get"></a>

```go
func Get(index *f64) SesEventDestinationCloudwatchDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEventDestinationCloudwatchDestinationOutputReference <a name="SesEventDestinationCloudwatchDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.NewSesEventDestinationCloudwatchDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesEventDestinationCloudwatchDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource">ValueSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput"></a>

```go
func DimensionNameInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource"></a>

```go
func ValueSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesEventDestinationKinesisDestinationOutputReference <a name="SesEventDestinationKinesisDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.NewSesEventDestinationKinesisDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEventDestinationKinesisDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() SesEventDestinationKinesisDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---


### SesEventDestinationSnsDestinationOutputReference <a name="SesEventDestinationSnsDestinationOutputReference" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/seseventdestination"

seseventdestination.NewSesEventDestinationSnsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesEventDestinationSnsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() SesEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---



