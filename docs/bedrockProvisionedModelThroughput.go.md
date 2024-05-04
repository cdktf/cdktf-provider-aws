# `bedrockProvisionedModelThroughput` Submodule <a name="`bedrockProvisionedModelThroughput` Submodule" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockProvisionedModelThroughput <a name="BedrockProvisionedModelThroughput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.NewBedrockProvisionedModelThroughput(scope Construct, id *string, config BedrockProvisionedModelThroughputConfig) BedrockProvisionedModelThroughput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration">ResetCommitmentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts"></a>

```go
func PutTimeouts(value BedrockProvisionedModelThroughputTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `ResetCommitmentDuration` <a name="ResetCommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration"></a>

```go
func ResetCommitmentDuration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughput_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockProvisionedModelThroughput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockProvisionedModelThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn">ProvisionedModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput">CommitmentDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput">ModelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput">ModelUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput">ProvisionedModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration">CommitmentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits">ModelUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName">ProvisionedModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedModelArn`<sup>Required</sup> <a name="ProvisionedModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn"></a>

```go
func ProvisionedModelArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts"></a>

```go
func Timeouts() BedrockProvisionedModelThroughputTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a>

---

##### `CommitmentDurationInput`<sup>Optional</sup> <a name="CommitmentDurationInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput"></a>

```go
func CommitmentDurationInput() *string
```

- *Type:* *string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput"></a>

```go
func ModelArnInput() *string
```

- *Type:* *string

---

##### `ModelUnitsInput`<sup>Optional</sup> <a name="ModelUnitsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput"></a>

```go
func ModelUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedModelNameInput`<sup>Optional</sup> <a name="ProvisionedModelNameInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput"></a>

```go
func ProvisionedModelNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CommitmentDuration`<sup>Required</sup> <a name="CommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration"></a>

```go
func CommitmentDuration() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `ModelUnits`<sup>Required</sup> <a name="ModelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits"></a>

```go
func ModelUnits() *f64
```

- *Type:* *f64

---

##### `ProvisionedModelName`<sup>Required</sup> <a name="ProvisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName"></a>

```go
func ProvisionedModelName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockProvisionedModelThroughputConfig <a name="BedrockProvisionedModelThroughputConfig" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

&bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughputConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModelArn: *string,
	ModelUnits: *f64,
	ProvisionedModelName: *string,
	CommitmentDuration: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn">ModelArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits">ModelUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName">ProvisionedModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration">CommitmentDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn"></a>

```go
ModelArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `ModelUnits`<sup>Required</sup> <a name="ModelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits"></a>

```go
ModelUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `ProvisionedModelName`<sup>Required</sup> <a name="ProvisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName"></a>

```go
ProvisionedModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `CommitmentDuration`<sup>Optional</sup> <a name="CommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration"></a>

```go
CommitmentDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts"></a>

```go
Timeouts BedrockProvisionedModelThroughputTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

### BedrockProvisionedModelThroughputTimeouts <a name="BedrockProvisionedModelThroughputTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

&bedrockprovisionedmodelthroughput.BedrockProvisionedModelThroughputTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockProvisionedModelThroughputTimeoutsOutputReference <a name="BedrockProvisionedModelThroughputTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockprovisionedmodelthroughput"

bedrockprovisionedmodelthroughput.NewBedrockProvisionedModelThroughputTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockProvisionedModelThroughputTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



