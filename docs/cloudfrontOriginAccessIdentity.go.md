# `cloudfrontOriginAccessIdentity` Submodule <a name="`cloudfrontOriginAccessIdentity` Submodule" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessIdentity <a name="CloudfrontOriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

cloudfrontoriginaccessidentity.NewCloudfrontOriginAccessIdentity(scope Construct, id *string, config CloudfrontOriginAccessIdentityConfig) CloudfrontOriginAccessIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontOriginAccessIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

cloudfrontoriginaccessidentity.CloudfrontOriginAccessIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

cloudfrontoriginaccessidentity.CloudfrontOriginAccessIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

cloudfrontoriginaccessidentity.CloudfrontOriginAccessIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

cloudfrontoriginaccessidentity.CloudfrontOriginAccessIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudfrontOriginAccessIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontOriginAccessIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontOriginAccessIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontOriginAccessIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference">CallerReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath">CloudfrontAccessIdentityPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn">IamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId">S3CanonicalUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference"></a>

```go
func CallerReference() *string
```

- *Type:* *string

---

##### `CloudfrontAccessIdentityPath`<sup>Required</sup> <a name="CloudfrontAccessIdentityPath" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath"></a>

```go
func CloudfrontAccessIdentityPath() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn"></a>

```go
func IamArn() *string
```

- *Type:* *string

---

##### `S3CanonicalUserId`<sup>Required</sup> <a name="S3CanonicalUserId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```go
func S3CanonicalUserId() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessIdentityConfig <a name="CloudfrontOriginAccessIdentityConfig" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudfrontoriginaccessidentity"

&cloudfrontoriginaccessidentity.CloudfrontOriginAccessIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Comment: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



