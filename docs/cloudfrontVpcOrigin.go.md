# `cloudfrontVpcOrigin` Submodule <a name="`cloudfrontVpcOrigin` Submodule" id="@cdktf/provider-aws.cloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontVpcOrigin <a name="CloudfrontVpcOrigin" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOrigin(scope Construct, id *string, config CloudfrontVpcOriginConfig) CloudfrontVpcOrigin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig">PutVpcOriginEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig">ResetVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts"></a>

```go
func PutTimeouts(value CloudfrontVpcOriginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

---

##### `PutVpcOriginEndpointConfig` <a name="PutVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig"></a>

```go
func PutVpcOriginEndpointConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcOriginEndpointConfig` <a name="ResetVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig"></a>

```go
func ResetVpcOriginEndpointConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.CloudfrontVpcOrigin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.CloudfrontVpcOrigin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.CloudfrontVpcOrigin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.CloudfrontVpcOrigin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontVpcOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig">VpcOriginEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput">VpcOriginEndpointConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts"></a>

```go
func Timeouts() CloudfrontVpcOriginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a>

---

##### `VpcOriginEndpointConfig`<sup>Required</sup> <a name="VpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```go
func VpcOriginEndpointConfig() CloudfrontVpcOriginVpcOriginEndpointConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcOriginEndpointConfigInput`<sup>Optional</sup> <a name="VpcOriginEndpointConfigInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput"></a>

```go
func VpcOriginEndpointConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontVpcOriginConfig <a name="CloudfrontVpcOriginConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

&cloudfrontvpcorigin.CloudfrontVpcOriginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts,
	VpcOriginEndpointConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig">VpcOriginEndpointConfig</a></code> | <code>interface{}</code> | vpc_origin_endpoint_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts"></a>

```go
Timeouts CloudfrontVpcOriginTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#timeouts CloudfrontVpcOrigin#timeouts}

---

##### `VpcOriginEndpointConfig`<sup>Optional</sup> <a name="VpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig"></a>

```go
VpcOriginEndpointConfig interface{}
```

- *Type:* interface{}

vpc_origin_endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}

---

### CloudfrontVpcOriginTimeouts <a name="CloudfrontVpcOriginTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

&cloudfrontvpcorigin.CloudfrontVpcOriginTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#create CloudfrontVpcOrigin#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#delete CloudfrontVpcOrigin#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#update CloudfrontVpcOrigin#update}

---

### CloudfrontVpcOriginVpcOriginEndpointConfig <a name="CloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

&cloudfrontvpcorigin.CloudfrontVpcOriginVpcOriginEndpointConfig {
	Arn: *string,
	HttpPort: *f64,
	HttpsPort: *f64,
	Name: *string,
	OriginProtocolPolicy: *string,
	OriginSslProtocols: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort">HttpPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols">OriginSslProtocols</a></code> | <code>interface{}</code> | origin_ssl_protocols block. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}.

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort"></a>

```go
HttpPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort"></a>

```go
HttpsPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}.

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy"></a>

```go
OriginProtocolPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}.

---

##### `OriginSslProtocols`<sup>Optional</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols"></a>

```go
OriginSslProtocols interface{}
```

- *Type:* interface{}

origin_ssl_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}

---

### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

&cloudfrontvpcorigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols {
	Items: *[]*string,
	Quantity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity">Quantity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}.

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity"></a>

```go
Quantity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontVpcOriginTimeoutsOutputReference <a name="CloudfrontVpcOriginTimeoutsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOriginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontVpcOriginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontVpcOriginVpcOriginEndpointConfigList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOriginVpcOriginEndpointConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontVpcOriginVpcOriginEndpointConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get"></a>

```go
func Get(index *f64) CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get"></a>

```go
func Get(index *f64) CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput">QuantityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity">Quantity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuantityInput`<sup>Optional</sup> <a name="QuantityInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput"></a>

```go
func QuantityInput() *f64
```

- *Type:* *f64

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity"></a>

```go
func Quantity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontvpcorigin"

cloudfrontvpcorigin.NewCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols">PutOriginSslProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols">ResetOriginSslProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOriginSslProtocols` <a name="PutOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols"></a>

```go
func PutOriginSslProtocols(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOriginSslProtocols` <a name="ResetOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols"></a>

```go
func ResetOriginSslProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">OriginSslProtocols</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput">OriginProtocolPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput">OriginSslProtocolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```go
func OriginSslProtocols() CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput"></a>

```go
func HttpPortInput() *f64
```

- *Type:* *f64

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput"></a>

```go
func HttpsPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OriginProtocolPolicyInput`<sup>Optional</sup> <a name="OriginProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput"></a>

```go
func OriginProtocolPolicyInput() *string
```

- *Type:* *string

---

##### `OriginSslProtocolsInput`<sup>Optional</sup> <a name="OriginSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput"></a>

```go
func OriginSslProtocolsInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```go
func OriginProtocolPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



