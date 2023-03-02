# `servicecatalogProductPortfolioAssociation` Submodule <a name="`servicecatalogProductPortfolioAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProductPortfolioAssociation <a name="ServicecatalogProductPortfolioAssociation" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

new servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId">resetSourcePortfolioId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogProductPortfolioAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourcePortfolioId` <a name="resetSourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId"></a>

```typescript
public resetSourcePortfolioId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput">sourcePortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId">sourcePortfolioId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProductPortfolioAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `sourcePortfolioIdInput`<sup>Optional</sup> <a name="sourcePortfolioIdInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput"></a>

```typescript
public readonly sourcePortfolioIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicecatalogProductPortfolioAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a> | cdktf.IResolvable

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `sourcePortfolioId`<sup>Required</sup> <a name="sourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId"></a>

```typescript
public readonly sourcePortfolioId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductPortfolioAssociationConfig <a name="ServicecatalogProductPortfolioAssociationConfig" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

const servicecatalogProductPortfolioAssociationConfig: servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId">sourcePortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourcePortfolioId`<sup>Optional</sup> <a name="sourcePortfolioId" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId"></a>

```typescript
public readonly sourcePortfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProductPortfolioAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}

---

### ServicecatalogProductPortfolioAssociationTimeouts <a name="ServicecatalogProductPortfolioAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

const servicecatalogProductPortfolioAssociationTimeouts: servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductPortfolioAssociationTimeoutsOutputReference <a name="ServicecatalogProductPortfolioAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/provider-aws'

new servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogProductPortfolioAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a> | cdktf.IResolvable

---



