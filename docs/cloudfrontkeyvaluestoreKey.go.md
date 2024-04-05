# `cloudfrontkeyvaluestoreKey` Submodule <a name="`cloudfrontkeyvaluestoreKey` Submodule" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontkeyvaluestoreKey <a name="CloudfrontkeyvaluestoreKey" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cloudfrontkeyvaluestore_key aws_cloudfrontkeyvaluestore_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

cloudfrontkeyvaluestorekey.NewCloudfrontkeyvaluestoreKey(scope Construct, id *string, config CloudfrontkeyvaluestoreKeyConfig) CloudfrontkeyvaluestoreKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig">CloudfrontkeyvaluestoreKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig">CloudfrontkeyvaluestoreKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontkeyvaluestoreKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

cloudfrontkeyvaluestorekey.CloudfrontkeyvaluestoreKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

cloudfrontkeyvaluestorekey.CloudfrontkeyvaluestoreKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

cloudfrontkeyvaluestorekey.CloudfrontkeyvaluestoreKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

cloudfrontkeyvaluestorekey.CloudfrontkeyvaluestoreKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudfrontkeyvaluestoreKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontkeyvaluestoreKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontkeyvaluestoreKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cloudfrontkeyvaluestore_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontkeyvaluestoreKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.totalSizeInBytes">TotalSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArnInput">KeyValueStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TotalSizeInBytes`<sup>Required</sup> <a name="TotalSizeInBytes" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.totalSizeInBytes"></a>

```go
func TotalSizeInBytes() *f64
```

- *Type:* *f64

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KeyValueStoreArnInput`<sup>Optional</sup> <a name="KeyValueStoreArnInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArnInput"></a>

```go
func KeyValueStoreArnInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyValueStoreArn`<sup>Required</sup> <a name="KeyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArn"></a>

```go
func KeyValueStoreArn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontkeyvaluestoreKeyConfig <a name="CloudfrontkeyvaluestoreKeyConfig" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontkeyvaluestorekey"

&cloudfrontkeyvaluestorekey.CloudfrontkeyvaluestoreKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	KeyValueStoreArn: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.key">Key</a></code> | <code>*string</code> | The key to put. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.value">Value</a></code> | <code>*string</code> | The value to put. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cloudfrontkeyvaluestore_key#key CloudfrontkeyvaluestoreKey#key}

---

##### `KeyValueStoreArn`<sup>Required</sup> <a name="KeyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.keyValueStoreArn"></a>

```go
KeyValueStoreArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cloudfrontkeyvaluestore_key#key_value_store_arn CloudfrontkeyvaluestoreKey#key_value_store_arn}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cloudfrontkeyvaluestore_key#value CloudfrontkeyvaluestoreKey#value}

---



