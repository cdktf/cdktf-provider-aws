# `iamOpenidConnectProvider` Submodule <a name="`iamOpenidConnectProvider` Submodule" id="@cdktf/provider-aws.iamOpenidConnectProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOpenidConnectProvider <a name="IamOpenidConnectProvider" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider aws_iam_openid_connect_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

iamopenidconnectprovider.NewIamOpenidConnectProvider(scope Construct, id *string, config IamOpenidConnectProviderConfig) IamOpenidConnectProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig">IamOpenidConnectProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig">IamOpenidConnectProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetThumbprintList">ResetThumbprintList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetThumbprintList` <a name="ResetThumbprintList" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.resetThumbprintList"></a>

```go
func ResetThumbprintList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamOpenidConnectProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

iamopenidconnectprovider.IamOpenidConnectProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

iamopenidconnectprovider.IamOpenidConnectProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

iamopenidconnectprovider.IamOpenidConnectProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

iamopenidconnectprovider.IamOpenidConnectProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamOpenidConnectProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamOpenidConnectProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamOpenidConnectProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamOpenidConnectProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.clientIdListInput">ClientIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.thumbprintListInput">ThumbprintListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.clientIdList">ClientIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.thumbprintList">ThumbprintList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClientIdListInput`<sup>Optional</sup> <a name="ClientIdListInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.clientIdListInput"></a>

```go
func ClientIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThumbprintListInput`<sup>Optional</sup> <a name="ThumbprintListInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.thumbprintListInput"></a>

```go
func ThumbprintListInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ClientIdList`<sup>Required</sup> <a name="ClientIdList" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.clientIdList"></a>

```go
func ClientIdList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThumbprintList`<sup>Required</sup> <a name="ThumbprintList" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.thumbprintList"></a>

```go
func ThumbprintList() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamOpenidConnectProviderConfig <a name="IamOpenidConnectProviderConfig" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamopenidconnectprovider"

&iamopenidconnectprovider.IamOpenidConnectProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientIdList: *[]*string,
	Url: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	ThumbprintList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.clientIdList">ClientIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#client_id_list IamOpenidConnectProvider#client_id_list}. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#url IamOpenidConnectProvider#url}. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#id IamOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#tags IamOpenidConnectProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#tags_all IamOpenidConnectProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.thumbprintList">ThumbprintList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#thumbprint_list IamOpenidConnectProvider#thumbprint_list}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientIdList`<sup>Required</sup> <a name="ClientIdList" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.clientIdList"></a>

```go
ClientIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#client_id_list IamOpenidConnectProvider#client_id_list}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#url IamOpenidConnectProvider#url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#id IamOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#tags IamOpenidConnectProvider#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#tags_all IamOpenidConnectProvider#tags_all}.

---

##### `ThumbprintList`<sup>Optional</sup> <a name="ThumbprintList" id="@cdktf/provider-aws.iamOpenidConnectProvider.IamOpenidConnectProviderConfig.property.thumbprintList"></a>

```go
ThumbprintList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_openid_connect_provider#thumbprint_list IamOpenidConnectProvider#thumbprint_list}.

---



