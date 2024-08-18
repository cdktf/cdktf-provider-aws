# `ec2InstanceMetadataDefaults` Submodule <a name="`ec2InstanceMetadataDefaults` Submodule" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceMetadataDefaults <a name="Ec2InstanceMetadataDefaults" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults aws_ec2_instance_metadata_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

ec2instancemetadatadefaults.NewEc2InstanceMetadataDefaults(scope Construct, id *string, config Ec2InstanceMetadataDefaultsConfig) Ec2InstanceMetadataDefaults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig">Ec2InstanceMetadataDefaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig">Ec2InstanceMetadataDefaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetInstanceMetadataTags"></a>

```go
func ResetInstanceMetadataTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2InstanceMetadataDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

ec2instancemetadatadefaults.Ec2InstanceMetadataDefaults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

ec2instancemetadatadefaults.Ec2InstanceMetadataDefaults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

ec2instancemetadatadefaults.Ec2InstanceMetadataDefaults_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

ec2instancemetadatadefaults.Ec2InstanceMetadataDefaults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Ec2InstanceMetadataDefaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2InstanceMetadataDefaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2InstanceMetadataDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Ec2InstanceMetadataDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTagsInput"></a>

```go
func InstanceMetadataTagsInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceMetadataDefaultsConfig <a name="Ec2InstanceMetadataDefaultsConfig" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2instancemetadatadefaults"

&ec2instancemetadatadefaults.Ec2InstanceMetadataDefaultsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HttpEndpoint: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
	InstanceMetadataTags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_endpoint Ec2InstanceMetadataDefaults#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_put_response_hop_limit Ec2InstanceMetadataDefaults#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_tokens Ec2InstanceMetadataDefaults#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#instance_metadata_tags Ec2InstanceMetadataDefaults#instance_metadata_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_endpoint Ec2InstanceMetadataDefaults#http_endpoint}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_put_response_hop_limit Ec2InstanceMetadataDefaults#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#http_tokens Ec2InstanceMetadataDefaults#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.instanceMetadataTags"></a>

```go
InstanceMetadataTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/ec2_instance_metadata_defaults#instance_metadata_tags Ec2InstanceMetadataDefaults#instance_metadata_tags}.

---



