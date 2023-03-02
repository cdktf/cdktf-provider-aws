# `servicecatalogProductPortfolioAssociation` Submodule <a name="`servicecatalogProductPortfolioAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProductPortfolioAssociation <a name="ServicecatalogProductPortfolioAssociation" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

servicecatalogproductportfolioassociation.NewServicecatalogProductPortfolioAssociation(scope Construct, id *string, config ServicecatalogProductPortfolioAssociationConfig) ServicecatalogProductPortfolioAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId">ResetSourcePortfolioId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ServicecatalogProductPortfolioAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetSourcePortfolioId` <a name="ResetSourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId"></a>

```go
func ResetSourcePortfolioId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

servicecatalogproductportfolioassociation.ServicecatalogProductPortfolioAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

servicecatalogproductportfolioassociation.ServicecatalogProductPortfolioAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

servicecatalogproductportfolioassociation.ServicecatalogProductPortfolioAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput">SourcePortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts"></a>

```go
func Timeouts() ServicecatalogProductPortfolioAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput"></a>

```go
func PortfolioIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `SourcePortfolioIdInput`<sup>Optional</sup> <a name="SourcePortfolioIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput"></a>

```go
func SourcePortfolioIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `SourcePortfolioId`<sup>Required</sup> <a name="SourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId"></a>

```go
func SourcePortfolioId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductPortfolioAssociationConfig <a name="ServicecatalogProductPortfolioAssociationConfig" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

&servicecatalogproductportfolioassociation.ServicecatalogProductPortfolioAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PortfolioId: *string,
	ProductId: *string,
	AcceptLanguage: *string,
	Id: *string,
	SourcePortfolioId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId"></a>

```go
PortfolioId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourcePortfolioId`<sup>Optional</sup> <a name="SourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId"></a>

```go
SourcePortfolioId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts"></a>

```go
Timeouts ServicecatalogProductPortfolioAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}

---

### ServicecatalogProductPortfolioAssociationTimeouts <a name="ServicecatalogProductPortfolioAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

&servicecatalogproductportfolioassociation.ServicecatalogProductPortfolioAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductPortfolioAssociationTimeoutsOutputReference <a name="ServicecatalogProductPortfolioAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogproductportfolioassociation"

servicecatalogproductportfolioassociation.NewServicecatalogProductPortfolioAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogProductPortfolioAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



