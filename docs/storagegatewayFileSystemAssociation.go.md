# `storagegatewayFileSystemAssociation` Submodule <a name="`storagegatewayFileSystemAssociation` Submodule" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayFileSystemAssociation <a name="StoragegatewayFileSystemAssociation" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association aws_storagegateway_file_system_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.NewStoragegatewayFileSystemAssociation(scope Construct, id *string, config StoragegatewayFileSystemAssociationConfig) StoragegatewayFileSystemAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig">StoragegatewayFileSystemAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig">StoragegatewayFileSystemAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes">PutCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn">ResetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes">ResetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheAttributes` <a name="PutCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes"></a>

```go
func PutCacheAttributes(value StoragegatewayFileSystemAssociationCacheAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts"></a>

```go
func PutTimeouts(value StoragegatewayFileSystemAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

---

##### `ResetAuditDestinationArn` <a name="ResetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn"></a>

```go
func ResetAuditDestinationArn()
```

##### `ResetCacheAttributes` <a name="ResetCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes"></a>

```go
func ResetCacheAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StoragegatewayFileSystemAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StoragegatewayFileSystemAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayFileSystemAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput">AuditDestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput">CacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput">LocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes"></a>

```go
func CacheAttributes() StoragegatewayFileSystemAssociationCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts"></a>

```go
func Timeouts() StoragegatewayFileSystemAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a>

---

##### `AuditDestinationArnInput`<sup>Optional</sup> <a name="AuditDestinationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput"></a>

```go
func AuditDestinationArnInput() *string
```

- *Type:* *string

---

##### `CacheAttributesInput`<sup>Optional</sup> <a name="CacheAttributesInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput"></a>

```go
func CacheAttributesInput() StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationArnInput`<sup>Optional</sup> <a name="LocationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput"></a>

```go
func LocationArnInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn"></a>

```go
func AuditDestinationArn() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayFileSystemAssociationCacheAttributes <a name="StoragegatewayFileSystemAssociationCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

&storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociationCacheAttributes {
	CacheStaleTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}. |

---

##### `CacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```go
CacheStaleTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}.

---

### StoragegatewayFileSystemAssociationConfig <a name="StoragegatewayFileSystemAssociationConfig" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

&storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	LocationArn: *string,
	Password: *string,
	Username: *string,
	AuditDestinationArn: *string,
	CacheAttributes: github.com/cdktf/cdktf-provider-aws-go/aws/v19.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn">LocationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn"></a>

```go
LocationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `AuditDestinationArn`<sup>Optional</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn"></a>

```go
AuditDestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `CacheAttributes`<sup>Optional</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes"></a>

```go
CacheAttributes StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts"></a>

```go
Timeouts StoragegatewayFileSystemAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#timeouts StoragegatewayFileSystemAssociation#timeouts}

---

### StoragegatewayFileSystemAssociationTimeouts <a name="StoragegatewayFileSystemAssociationTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

&storagegatewayfilesystemassociation.StoragegatewayFileSystemAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayFileSystemAssociationCacheAttributesOutputReference <a name="StoragegatewayFileSystemAssociationCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.NewStoragegatewayFileSystemAssociationCacheAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StoragegatewayFileSystemAssociationCacheAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">ResetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheStaleTimeoutInSeconds` <a name="ResetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```go
func ResetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">CacheStaleTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="CacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```go
func CacheStaleTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```go
func CacheStaleTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---


### StoragegatewayFileSystemAssociationTimeoutsOutputReference <a name="StoragegatewayFileSystemAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/storagegatewayfilesystemassociation"

storagegatewayfilesystemassociation.NewStoragegatewayFileSystemAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StoragegatewayFileSystemAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



