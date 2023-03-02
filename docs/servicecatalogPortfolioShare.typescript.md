# `servicecatalogPortfolioShare` Submodule <a name="`servicecatalogPortfolioShare` Submodule" id="@cdktf/provider-aws.servicecatalogPortfolioShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolioShare <a name="ServicecatalogPortfolioShare" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

new servicecatalogPortfolioShare.ServicecatalogPortfolioShare(scope: Construct, id: string, config: ServicecatalogPortfolioShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig">ServicecatalogPortfolioShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig">ServicecatalogPortfolioShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetSharePrincipals">resetSharePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetShareTagOptions">resetShareTagOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetWaitForAcceptance">resetWaitForAcceptance</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogPortfolioShareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSharePrincipals` <a name="resetSharePrincipals" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetSharePrincipals"></a>

```typescript
public resetSharePrincipals(): void
```

##### `resetShareTagOptions` <a name="resetShareTagOptions" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetShareTagOptions"></a>

```typescript
public resetShareTagOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForAcceptance` <a name="resetWaitForAcceptance" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetWaitForAcceptance"></a>

```typescript
public resetWaitForAcceptance(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.accepted">accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference">ServicecatalogPortfolioShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipalsInput">sharePrincipalsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptionsInput">shareTagOptionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptanceInput">waitForAcceptanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipals">sharePrincipals</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptions">shareTagOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptance">waitForAcceptance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accepted`<sup>Required</sup> <a name="accepted" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.accepted"></a>

```typescript
public readonly accepted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogPortfolioShareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference">ServicecatalogPortfolioShareTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `sharePrincipalsInput`<sup>Optional</sup> <a name="sharePrincipalsInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipalsInput"></a>

```typescript
public readonly sharePrincipalsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shareTagOptionsInput`<sup>Optional</sup> <a name="shareTagOptionsInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptionsInput"></a>

```typescript
public readonly shareTagOptionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicecatalogPortfolioShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `waitForAcceptanceInput`<sup>Optional</sup> <a name="waitForAcceptanceInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptanceInput"></a>

```typescript
public readonly waitForAcceptanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `sharePrincipals`<sup>Required</sup> <a name="sharePrincipals" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipals"></a>

```typescript
public readonly sharePrincipals: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shareTagOptions`<sup>Required</sup> <a name="shareTagOptions" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptions"></a>

```typescript
public readonly shareTagOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `waitForAcceptance`<sup>Required</sup> <a name="waitForAcceptance" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptance"></a>

```typescript
public readonly waitForAcceptance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioShareConfig <a name="ServicecatalogPortfolioShareConfig" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.Initializer"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

const servicecatalogPortfolioShareConfig: servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.sharePrincipals">sharePrincipals</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.shareTagOptions">shareTagOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.waitForAcceptance">waitForAcceptance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharePrincipals`<sup>Optional</sup> <a name="sharePrincipals" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.sharePrincipals"></a>

```typescript
public readonly sharePrincipals: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}.

---

##### `shareTagOptions`<sup>Optional</sup> <a name="shareTagOptions" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.shareTagOptions"></a>

```typescript
public readonly shareTagOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogPortfolioShareTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#timeouts ServicecatalogPortfolioShare#timeouts}

---

##### `waitForAcceptance`<sup>Optional</sup> <a name="waitForAcceptance" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.waitForAcceptance"></a>

```typescript
public readonly waitForAcceptance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}.

---

### ServicecatalogPortfolioShareTimeouts <a name="ServicecatalogPortfolioShareTimeouts" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.Initializer"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

const servicecatalogPortfolioShareTimeouts: servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPortfolioShareTimeoutsOutputReference <a name="ServicecatalogPortfolioShareTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogPortfolioShare } from '@cdktf/provider-aws'

new servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogPortfolioShareTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a> | cdktf.IResolvable

---



