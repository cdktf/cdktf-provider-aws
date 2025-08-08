# `quicksightIpRestriction` Submodule <a name="`quicksightIpRestriction` Submodule" id="@cdktf/provider-aws.quicksightIpRestriction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIpRestriction <a name="QuicksightIpRestriction" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction aws_quicksight_ip_restriction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

quicksightiprestriction.NewQuicksightIpRestriction(scope Construct, id *string, config QuicksightIpRestrictionConfig) QuicksightIpRestriction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap">ResetIpRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap">ResetVpcEndpointIdRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap">ResetVpcIdRestrictionRuleMap</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetIpRestrictionRuleMap` <a name="ResetIpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap"></a>

```go
func ResetIpRestrictionRuleMap()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVpcEndpointIdRestrictionRuleMap` <a name="ResetVpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap"></a>

```go
func ResetVpcEndpointIdRestrictionRuleMap()
```

##### `ResetVpcIdRestrictionRuleMap` <a name="ResetVpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap"></a>

```go
func ResetVpcIdRestrictionRuleMap()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

quicksightiprestriction.QuicksightIpRestriction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

quicksightiprestriction.QuicksightIpRestriction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

quicksightiprestriction.QuicksightIpRestriction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

quicksightiprestriction.QuicksightIpRestriction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightIpRestriction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightIpRestriction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIpRestriction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput">IpRestrictionRuleMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput">VpcEndpointIdRestrictionRuleMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput">VpcIdRestrictionRuleMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap">IpRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap">VpcEndpointIdRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap">VpcIdRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IpRestrictionRuleMapInput`<sup>Optional</sup> <a name="IpRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput"></a>

```go
func IpRestrictionRuleMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="VpcEndpointIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput"></a>

```go
func VpcEndpointIdRestrictionRuleMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="VpcIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput"></a>

```go
func VpcIdRestrictionRuleMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IpRestrictionRuleMap`<sup>Required</sup> <a name="IpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap"></a>

```go
func IpRestrictionRuleMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VpcEndpointIdRestrictionRuleMap`<sup>Required</sup> <a name="VpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap"></a>

```go
func VpcEndpointIdRestrictionRuleMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdRestrictionRuleMap`<sup>Required</sup> <a name="VpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap"></a>

```go
func VpcIdRestrictionRuleMap() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIpRestrictionConfig <a name="QuicksightIpRestrictionConfig" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightiprestriction"

&quicksightiprestriction.QuicksightIpRestrictionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	AwsAccountId: *string,
	IpRestrictionRuleMap: *map[string]*string,
	Region: *string,
	VpcEndpointIdRestrictionRuleMap: *map[string]*string,
	VpcIdRestrictionRuleMap: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap">IpRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap">VpcEndpointIdRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap">VpcIdRestrictionRuleMap</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}.

---

##### `IpRestrictionRuleMap`<sup>Optional</sup> <a name="IpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap"></a>

```go
IpRestrictionRuleMap *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#region QuicksightIpRestriction#region}

---

##### `VpcEndpointIdRestrictionRuleMap`<sup>Optional</sup> <a name="VpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap"></a>

```go
VpcEndpointIdRestrictionRuleMap *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}.

---

##### `VpcIdRestrictionRuleMap`<sup>Optional</sup> <a name="VpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap"></a>

```go
VpcIdRestrictionRuleMap *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}.

---



