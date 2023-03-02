# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktf/provider-aws.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransform(scope Construct, id *string, config GlueMlTransformConfig) GlueMlTransform
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables">PutInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInputRecordTables` <a name="PutInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```go
func PutInputRecordTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters"></a>

```go
func PutParameters(value GlueMlTransformParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```go
func ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.GlueMlTransform_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.GlueMlTransform_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.GlueMlTransform_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount">LabelCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput">GlueVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">InputRecordTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```go
func InputRecordTables() GlueMlTransformInputRecordTablesList
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a>

---

##### `LabelCount`<sup>Required</sup> <a name="LabelCount" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount"></a>

```go
func LabelCount() *f64
```

- *Type:* *f64

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters"></a>

```go
func Parameters() GlueMlTransformParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema"></a>

```go
func Schema() GlueMlTransformSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```go
func GlueVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputRecordTablesInput`<sup>Optional</sup> <a name="InputRecordTablesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```go
func InputRecordTablesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput"></a>

```go
func ParametersInput() GlueMlTransformParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```go
func GlueVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

&gluemltransform.GlueMlTransformConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InputRecordTables: interface{},
	Name: *string,
	Parameters: github.com/cdktf/cdktf-provider-aws-go/aws.glueMlTransform.GlueMlTransformParameters,
	RoleArn: *string,
	Description: *string,
	GlueVersion: *string,
	Id: *string,
	MaxCapacity: *f64,
	MaxRetries: *f64,
	NumberOfWorkers: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeout: *f64,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">InputRecordTables</a></code> | <code>interface{}</code> | input_record_tables block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```go
InputRecordTables interface{}
```

- *Type:* interface{}

input_record_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters"></a>

```go
Parameters GlueMlTransformParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}.

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```go
GlueVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}.

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}.

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

&gluemltransform.GlueMlTransformInputRecordTables {
	DatabaseName: *string,
	TableName: *string,
	CatalogId: *string,
	ConnectionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}.

---

### GlueMlTransformParameters <a name="GlueMlTransformParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

&gluemltransform.GlueMlTransformParameters {
	FindMatchesParameters: github.com/cdktf/cdktf-provider-aws-go/aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters,
	TransformType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | find_matches_parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType">TransformType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}. |

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters"></a>

```go
FindMatchesParameters GlueMlTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

find_matches_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType"></a>

```go
TransformType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}.

---

### GlueMlTransformParametersFindMatchesParameters <a name="GlueMlTransformParametersFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

&gluemltransform.GlueMlTransformParametersFindMatchesParameters {
	AccuracyCostTradeOff: *f64,
	EnforceProvidedLabels: interface{},
	PrecisionRecallTradeOff: *f64,
	PrimaryKeyColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff">AccuracyCostTradeOff</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff">PrecisionRecallTradeOff</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}. |

---

##### `AccuracyCostTradeOff`<sup>Optional</sup> <a name="AccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff"></a>

```go
AccuracyCostTradeOff *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}.

---

##### `EnforceProvidedLabels`<sup>Optional</sup> <a name="EnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```go
EnforceProvidedLabels interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}.

---

##### `PrecisionRecallTradeOff`<sup>Optional</sup> <a name="PrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff"></a>

```go
PrecisionRecallTradeOff *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}.

---

##### `PrimaryKeyColumnName`<sup>Optional</sup> <a name="PrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```go
PrimaryKeyColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}.

---

### GlueMlTransformSchema <a name="GlueMlTransformSchema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

&gluemltransform.GlueMlTransformSchema {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesList <a name="GlueMlTransformInputRecordTablesList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformInputRecordTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueMlTransformInputRecordTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get"></a>

```go
func Get(index *f64) GlueMlTransformInputRecordTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformInputRecordTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueMlTransformInputRecordTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformParametersFindMatchesParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformParametersFindMatchesParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformParametersFindMatchesParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff">ResetAccuracyCostTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">ResetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff">ResetPrecisionRecallTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">ResetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccuracyCostTradeOff` <a name="ResetAccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff"></a>

```go
func ResetAccuracyCostTradeOff()
```

##### `ResetEnforceProvidedLabels` <a name="ResetEnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```go
func ResetEnforceProvidedLabels()
```

##### `ResetPrecisionRecallTradeOff` <a name="ResetPrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff"></a>

```go
func ResetPrecisionRecallTradeOff()
```

##### `ResetPrimaryKeyColumnName` <a name="ResetPrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```go
func ResetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput">AccuracyCostTradeOffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">EnforceProvidedLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput">PrecisionRecallTradeOffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">PrimaryKeyColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff">AccuracyCostTradeOff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff">PrecisionRecallTradeOff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccuracyCostTradeOffInput`<sup>Optional</sup> <a name="AccuracyCostTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput"></a>

```go
func AccuracyCostTradeOffInput() *f64
```

- *Type:* *f64

---

##### `EnforceProvidedLabelsInput`<sup>Optional</sup> <a name="EnforceProvidedLabelsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```go
func EnforceProvidedLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `PrecisionRecallTradeOffInput`<sup>Optional</sup> <a name="PrecisionRecallTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput"></a>

```go
func PrecisionRecallTradeOffInput() *f64
```

- *Type:* *f64

---

##### `PrimaryKeyColumnNameInput`<sup>Optional</sup> <a name="PrimaryKeyColumnNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```go
func PrimaryKeyColumnNameInput() *string
```

- *Type:* *string

---

##### `AccuracyCostTradeOff`<sup>Required</sup> <a name="AccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff"></a>

```go
func AccuracyCostTradeOff() *f64
```

- *Type:* *f64

---

##### `EnforceProvidedLabels`<sup>Required</sup> <a name="EnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```go
func EnforceProvidedLabels() interface{}
```

- *Type:* interface{}

---

##### `PrecisionRecallTradeOff`<sup>Required</sup> <a name="PrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff"></a>

```go
func PrecisionRecallTradeOff() *f64
```

- *Type:* *f64

---

##### `PrimaryKeyColumnName`<sup>Required</sup> <a name="PrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```go
func PrimaryKeyColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueMlTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformParametersOutputReference <a name="GlueMlTransformParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters">PutFindMatchesParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFindMatchesParameters` <a name="PutFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters"></a>

```go
func PutFindMatchesParameters(value GlueMlTransformParametersFindMatchesParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput">FindMatchesParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput">TransformTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType">TransformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters"></a>

```go
func FindMatchesParameters() GlueMlTransformParametersFindMatchesParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a>

---

##### `FindMatchesParametersInput`<sup>Optional</sup> <a name="FindMatchesParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```go
func FindMatchesParametersInput() GlueMlTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---

##### `TransformTypeInput`<sup>Optional</sup> <a name="TransformTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput"></a>

```go
func TransformTypeInput() *string
```

- *Type:* *string

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType"></a>

```go
func TransformType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueMlTransformParameters
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---


### GlueMlTransformSchemaList <a name="GlueMlTransformSchemaList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueMlTransformSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get"></a>

```go
func Get(index *f64) GlueMlTransformSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GlueMlTransformSchemaOutputReference <a name="GlueMlTransformSchemaOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluemltransform"

gluemltransform.NewGlueMlTransformSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueMlTransformSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueMlTransformSchema
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a>

---



