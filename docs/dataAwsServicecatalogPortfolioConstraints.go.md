# `dataAwsServicecatalogPortfolioConstraints` Submodule <a name="`dataAwsServicecatalogPortfolioConstraints` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogPortfolioConstraints <a name="DataAwsServicecatalogPortfolioConstraints" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.NewDataAwsServicecatalogPortfolioConstraints(scope Construct, id *string, config DataAwsServicecatalogPortfolioConstraintsConfig) DataAwsServicecatalogPortfolioConstraints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig">DataAwsServicecatalogPortfolioConstraintsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig">DataAwsServicecatalogPortfolioConstraintsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsServicecatalogPortfolioConstraintsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId"></a>

```go
func ResetId()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId"></a>

```go
func ResetProductId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicecatalogPortfolioConstraints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsServicecatalogPortfolioConstraints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsServicecatalogPortfolioConstraints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsServicecatalogPortfolioConstraints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicecatalogPortfolioConstraints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details">Details</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details"></a>

```go
func Details() DataAwsServicecatalogPortfolioConstraintsDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts"></a>

```go
func Timeouts() DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput"></a>

```go
func PortfolioIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogPortfolioConstraintsConfig <a name="DataAwsServicecatalogPortfolioConstraintsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

&dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraintsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PortfolioId: *string,
	AcceptLanguage: *string,
	Id: *string,
	ProductId: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId"></a>

```go
PortfolioId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#region DataAwsServicecatalogPortfolioConstraints#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts"></a>

```go
Timeouts DataAwsServicecatalogPortfolioConstraintsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}

---

### DataAwsServicecatalogPortfolioConstraintsDetails <a name="DataAwsServicecatalogPortfolioConstraintsDetails" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

&dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraintsDetails {

}
```


### DataAwsServicecatalogPortfolioConstraintsTimeouts <a name="DataAwsServicecatalogPortfolioConstraintsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

&dataawsservicecatalogportfolioconstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogPortfolioConstraintsDetailsList <a name="DataAwsServicecatalogPortfolioConstraintsDetailsList" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.NewDataAwsServicecatalogPortfolioConstraintsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsServicecatalogPortfolioConstraintsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get"></a>

```go
func Get(index *f64) DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.NewDataAwsServicecatalogPortfolioConstraintsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId">ConstraintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintId`<sup>Required</sup> <a name="ConstraintId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId"></a>

```go
func ConstraintId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsServicecatalogPortfolioConstraintsDetails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a>

---


### DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsservicecatalogportfolioconstraints"

dataawsservicecatalogportfolioconstraints.NewDataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



