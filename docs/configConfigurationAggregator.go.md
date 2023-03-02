# `configConfigurationAggregator` Submodule <a name="`configConfigurationAggregator` Submodule" id="@cdktf/provider-aws.configConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationAggregator <a name="ConfigConfigurationAggregator" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator aws_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregator(scope Construct, id *string, config ConfigConfigurationAggregatorConfig) ConfigConfigurationAggregator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource">PutAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource">PutOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSource">ResetAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource">ResetOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccountAggregationSource` <a name="PutAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource"></a>

```go
func PutAccountAggregationSource(value ConfigConfigurationAggregatorAccountAggregationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---

##### `PutOrganizationAggregationSource` <a name="PutOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource"></a>

```go
func PutOrganizationAggregationSource(value ConfigConfigurationAggregatorOrganizationAggregationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `ResetAccountAggregationSource` <a name="ResetAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSource"></a>

```go
func ResetAccountAggregationSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganizationAggregationSource` <a name="ResetOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource"></a>

```go
func ResetOrganizationAggregationSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSource">AccountAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference">ConfigConfigurationAggregatorAccountAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourceInput">AccountAggregationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput">OrganizationAggregationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountAggregationSource`<sup>Required</sup> <a name="AccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSource"></a>

```go
func AccountAggregationSource() ConfigConfigurationAggregatorAccountAggregationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference">ConfigConfigurationAggregatorAccountAggregationSourceOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `OrganizationAggregationSource`<sup>Required</sup> <a name="OrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```go
func OrganizationAggregationSource() ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `AccountAggregationSourceInput`<sup>Optional</sup> <a name="AccountAggregationSourceInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourceInput"></a>

```go
func AccountAggregationSourceInput() ConfigConfigurationAggregatorAccountAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationAggregationSourceInput`<sup>Optional</sup> <a name="OrganizationAggregationSourceInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput"></a>

```go
func OrganizationAggregationSourceInput() ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationAggregatorAccountAggregationSource <a name="ConfigConfigurationAggregatorAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorAccountAggregationSource {
	AccountIds: *[]*string,
	AllRegions: interface{},
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}. |

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}.

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.allRegions"></a>

```go
AllRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}.

---

### ConfigConfigurationAggregatorConfig <a name="ConfigConfigurationAggregatorConfig" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountAggregationSource: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource,
	Id: *string,
	OrganizationAggregationSource: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#name ConfigConfigurationAggregator#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSource">AccountAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | account_aggregation_source block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#id ConfigConfigurationAggregator#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | organization_aggregation_source block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#name ConfigConfigurationAggregator#name}.

---

##### `AccountAggregationSource`<sup>Optional</sup> <a name="AccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSource"></a>

```go
AccountAggregationSource ConfigConfigurationAggregatorAccountAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

account_aggregation_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#id ConfigConfigurationAggregator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationAggregationSource`<sup>Optional</sup> <a name="OrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource"></a>

```go
OrganizationAggregationSource ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

organization_aggregation_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}.

---

### ConfigConfigurationAggregatorOrganizationAggregationSource <a name="ConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorOrganizationAggregationSource {
	RoleArn: *string,
	AllRegions: interface{},
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allRegions"></a>

```go
AllRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationAggregatorAccountAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorAccountAggregationSourceOutputReference" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorAccountAggregationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationAggregatorAccountAggregationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetAllRegions"></a>

```go
func ResetAllRegions()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetRegions"></a>

```go
func ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegionsInput"></a>

```go
func AllRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegions"></a>

```go
func AllRegions() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigurationAggregatorAccountAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---


### ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllRegions"></a>

```go
func ResetAllRegions()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRegions"></a>

```go
func ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegionsInput"></a>

```go
func AllRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegions"></a>

```go
func AllRegions() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---



