# `servicecatalogProvisionedProduct` Submodule <a name="`servicecatalogProvisionedProduct` Submodule" id="@cdktf/provider-aws.servicecatalogProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisionedProduct <a name="ServicecatalogProvisionedProduct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProduct(scope Construct, id *string, config ServicecatalogProvisionedProductConfig) ServicecatalogProvisionedProduct
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters">PutProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences">PutStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors">ResetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId">ResetPathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName">ResetPathName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName">ResetProductName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId">ResetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName">ResetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters">ResetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources">ResetRetainPhysicalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences">ResetStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProvisioningParameters` <a name="PutProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters"></a>

```go
func PutProvisioningParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStackSetProvisioningPreferences` <a name="PutStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences"></a>

```go
func PutStackSetProvisioningPreferences(value ServicecatalogProvisionedProductStackSetProvisioningPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts"></a>

```go
func PutTimeouts(value ServicecatalogProvisionedProductTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreErrors` <a name="ResetIgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors"></a>

```go
func ResetIgnoreErrors()
```

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns"></a>

```go
func ResetNotificationArns()
```

##### `ResetPathId` <a name="ResetPathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId"></a>

```go
func ResetPathId()
```

##### `ResetPathName` <a name="ResetPathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName"></a>

```go
func ResetPathName()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId"></a>

```go
func ResetProductId()
```

##### `ResetProductName` <a name="ResetProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName"></a>

```go
func ResetProductName()
```

##### `ResetProvisioningArtifactId` <a name="ResetProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId"></a>

```go
func ResetProvisioningArtifactId()
```

##### `ResetProvisioningArtifactName` <a name="ResetProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName"></a>

```go
func ResetProvisioningArtifactName()
```

##### `ResetProvisioningParameters` <a name="ResetProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters"></a>

```go
func ResetProvisioningParameters()
```

##### `ResetRetainPhysicalResources` <a name="ResetRetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources"></a>

```go
func ResetRetainPhysicalResources()
```

##### `ResetStackSetProvisioningPreferences` <a name="ResetStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences"></a>

```go
func ResetStackSetProvisioningPreferences()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.ServicecatalogProvisionedProduct_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.ServicecatalogProvisionedProduct_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.ServicecatalogProvisionedProduct_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames">CloudwatchDashboardNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId">LastProvisioningRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId">LastRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId">LastSuccessfulProvisioningRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn">LaunchRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs">Outputs</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences">StackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput">IgnoreErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput">PathIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput">PathNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput">ProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput">ProvisioningArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput">ProvisioningArtifactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput">ProvisioningParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput">RetainPhysicalResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput">StackSetProvisioningPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors">IgnoreErrors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId">PathId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName">PathName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources">RetainPhysicalResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchDashboardNames`<sup>Required</sup> <a name="CloudwatchDashboardNames" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames"></a>

```go
func CloudwatchDashboardNames() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `LastProvisioningRecordId`<sup>Required</sup> <a name="LastProvisioningRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId"></a>

```go
func LastProvisioningRecordId() *string
```

- *Type:* *string

---

##### `LastRecordId`<sup>Required</sup> <a name="LastRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId"></a>

```go
func LastRecordId() *string
```

- *Type:* *string

---

##### `LastSuccessfulProvisioningRecordId`<sup>Required</sup> <a name="LastSuccessfulProvisioningRecordId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId"></a>

```go
func LastSuccessfulProvisioningRecordId() *string
```

- *Type:* *string

---

##### `LaunchRoleArn`<sup>Required</sup> <a name="LaunchRoleArn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn"></a>

```go
func LaunchRoleArn() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs"></a>

```go
func Outputs() ServicecatalogProvisionedProductOutputsList
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a>

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters"></a>

```go
func ProvisioningParameters() ServicecatalogProvisionedProductProvisioningParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a>

---

##### `StackSetProvisioningPreferences`<sup>Required</sup> <a name="StackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences"></a>

```go
func StackSetProvisioningPreferences() ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts"></a>

```go
func Timeouts() ServicecatalogProvisionedProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreErrorsInput`<sup>Optional</sup> <a name="IgnoreErrorsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput"></a>

```go
func IgnoreErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput"></a>

```go
func NotificationArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathIdInput`<sup>Optional</sup> <a name="PathIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput"></a>

```go
func PathIdInput() *string
```

- *Type:* *string

---

##### `PathNameInput`<sup>Optional</sup> <a name="PathNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput"></a>

```go
func PathNameInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput"></a>

```go
func ProductNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactIdInput`<sup>Optional</sup> <a name="ProvisioningArtifactIdInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput"></a>

```go
func ProvisioningArtifactIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactNameInput`<sup>Optional</sup> <a name="ProvisioningArtifactNameInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput"></a>

```go
func ProvisioningArtifactNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningParametersInput`<sup>Optional</sup> <a name="ProvisioningParametersInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput"></a>

```go
func ProvisioningParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RetainPhysicalResourcesInput`<sup>Optional</sup> <a name="RetainPhysicalResourcesInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput"></a>

```go
func RetainPhysicalResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `StackSetProvisioningPreferencesInput`<sup>Optional</sup> <a name="StackSetProvisioningPreferencesInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput"></a>

```go
func StackSetProvisioningPreferencesInput() ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreErrors`<sup>Required</sup> <a name="IgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors"></a>

```go
func IgnoreErrors() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns"></a>

```go
func NotificationArns() *[]*string
```

- *Type:* *[]*string

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId"></a>

```go
func PathId() *string
```

- *Type:* *string

---

##### `PathName`<sup>Required</sup> <a name="PathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName"></a>

```go
func PathName() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId"></a>

```go
func ProvisioningArtifactId() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactName`<sup>Required</sup> <a name="ProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName"></a>

```go
func ProvisioningArtifactName() *string
```

- *Type:* *string

---

##### `RetainPhysicalResources`<sup>Required</sup> <a name="RetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources"></a>

```go
func RetainPhysicalResources() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisionedProductConfig <a name="ServicecatalogProvisionedProductConfig" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

&servicecatalogprovisionedproduct.ServicecatalogProvisionedProductConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AcceptLanguage: *string,
	Id: *string,
	IgnoreErrors: interface{},
	NotificationArns: *[]*string,
	PathId: *string,
	PathName: *string,
	ProductId: *string,
	ProductName: *string,
	ProvisioningArtifactId: *string,
	ProvisioningArtifactName: *string,
	ProvisioningParameters: interface{},
	RetainPhysicalResources: interface{},
	StackSetProvisioningPreferences: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors">IgnoreErrors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId">PathId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName">PathName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName">ProductName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters">ProvisioningParameters</a></code> | <code>interface{}</code> | provisioning_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources">RetainPhysicalResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences">StackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | stack_set_provisioning_preferences block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreErrors`<sup>Optional</sup> <a name="IgnoreErrors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors"></a>

```go
IgnoreErrors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}.

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns"></a>

```go
NotificationArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}.

---

##### `PathId`<sup>Optional</sup> <a name="PathId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId"></a>

```go
PathId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}.

---

##### `PathName`<sup>Optional</sup> <a name="PathName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName"></a>

```go
PathName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}.

---

##### `ProductName`<sup>Optional</sup> <a name="ProductName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName"></a>

```go
ProductName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}.

---

##### `ProvisioningArtifactId`<sup>Optional</sup> <a name="ProvisioningArtifactId" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId"></a>

```go
ProvisioningArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}.

---

##### `ProvisioningArtifactName`<sup>Optional</sup> <a name="ProvisioningArtifactName" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName"></a>

```go
ProvisioningArtifactName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}.

---

##### `ProvisioningParameters`<sup>Optional</sup> <a name="ProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters"></a>

```go
ProvisioningParameters interface{}
```

- *Type:* interface{}

provisioning_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}

---

##### `RetainPhysicalResources`<sup>Optional</sup> <a name="RetainPhysicalResources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources"></a>

```go
RetainPhysicalResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}.

---

##### `StackSetProvisioningPreferences`<sup>Optional</sup> <a name="StackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences"></a>

```go
StackSetProvisioningPreferences ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

stack_set_provisioning_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts"></a>

```go
Timeouts ServicecatalogProvisionedProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}

---

### ServicecatalogProvisionedProductOutputs <a name="ServicecatalogProvisionedProductOutputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

&servicecatalogprovisionedproduct.ServicecatalogProvisionedProductOutputs {

}
```


### ServicecatalogProvisionedProductProvisioningParameters <a name="ServicecatalogProvisionedProductProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

&servicecatalogprovisionedproduct.ServicecatalogProvisionedProductProvisioningParameters {
	Key: *string,
	UsePreviousValue: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue">UsePreviousValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}.

---

##### `UsePreviousValue`<sup>Optional</sup> <a name="UsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue"></a>

```go
UsePreviousValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}.

---

### ServicecatalogProvisionedProductStackSetProvisioningPreferences <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

&servicecatalogprovisionedproduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences {
	Accounts: *[]*string,
	FailureToleranceCount: *f64,
	FailureTolerancePercentage: *f64,
	MaxConcurrencyCount: *f64,
	MaxConcurrencyPercentage: *f64,
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount">MaxConcurrencyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage">MaxConcurrencyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}.

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount"></a>

```go
FailureToleranceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage"></a>

```go
FailureTolerancePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}.

---

##### `MaxConcurrencyCount`<sup>Optional</sup> <a name="MaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount"></a>

```go
MaxConcurrencyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}.

---

##### `MaxConcurrencyPercentage`<sup>Optional</sup> <a name="MaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage"></a>

```go
MaxConcurrencyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}.

---

### ServicecatalogProvisionedProductTimeouts <a name="ServicecatalogProvisionedProductTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

&servicecatalogprovisionedproduct.ServicecatalogProvisionedProductTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisionedProductOutputsList <a name="ServicecatalogProvisionedProductOutputsList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogProvisionedProductOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get"></a>

```go
func Get(index *f64) ServicecatalogProvisionedProductOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServicecatalogProvisionedProductOutputsOutputReference <a name="ServicecatalogProvisionedProductOutputsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogProvisionedProductOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicecatalogProvisionedProductOutputs
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a>

---


### ServicecatalogProvisionedProductProvisioningParametersList <a name="ServicecatalogProvisionedProductProvisioningParametersList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductProvisioningParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogProvisionedProductProvisioningParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get"></a>

```go
func Get(index *f64) ServicecatalogProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogProvisionedProductProvisioningParametersOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductProvisioningParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogProvisionedProductProvisioningParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue">ResetUsePreviousValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsePreviousValue` <a name="ResetUsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue"></a>

```go
func ResetUsePreviousValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput">UsePreviousValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue">UsePreviousValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `UsePreviousValueInput`<sup>Optional</sup> <a name="UsePreviousValueInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput"></a>

```go
func UsePreviousValueInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `UsePreviousValue`<sup>Required</sup> <a name="UsePreviousValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue"></a>

```go
func UsePreviousValue() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount">ResetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage">ResetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount"></a>

```go
func ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```go
func ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrencyCount` <a name="ResetMaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount"></a>

```go
func ResetMaxConcurrencyCount()
```

##### `ResetMaxConcurrencyPercentage` <a name="ResetMaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage"></a>

```go
func ResetMaxConcurrencyPercentage()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions"></a>

```go
func ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput">MaxConcurrencyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput">MaxConcurrencyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount">MaxConcurrencyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage">MaxConcurrencyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput"></a>

```go
func FailureToleranceCountInput() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```go
func FailureTolerancePercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyCountInput`<sup>Optional</sup> <a name="MaxConcurrencyCountInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput"></a>

```go
func MaxConcurrencyCountInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="MaxConcurrencyPercentageInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput"></a>

```go
func MaxConcurrencyPercentageInput() *f64
```

- *Type:* *f64

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount"></a>

```go
func FailureToleranceCount() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage"></a>

```go
func FailureTolerancePercentage() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyCount`<sup>Required</sup> <a name="MaxConcurrencyCount" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount"></a>

```go
func MaxConcurrencyCount() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyPercentage`<sup>Required</sup> <a name="MaxConcurrencyPercentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage"></a>

```go
func MaxConcurrencyPercentage() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---


### ServicecatalogProvisionedProductTimeoutsOutputReference <a name="ServicecatalogProvisionedProductTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisionedproduct"

servicecatalogprovisionedproduct.NewServicecatalogProvisionedProductTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogProvisionedProductTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



