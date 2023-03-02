# `sagemakerServicecatalogPortfolioStatus` Submodule <a name="`sagemakerServicecatalogPortfolioStatus` Submodule" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerServicecatalogPortfolioStatus <a name="SagemakerServicecatalogPortfolioStatus" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_servicecatalog_portfolio_status aws_sagemaker_servicecatalog_portfolio_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer"></a>

```typescript
import { sagemakerServicecatalogPortfolioStatus } from '@cdktf/provider-aws'

new sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus(scope: Construct, id: string, config: SagemakerServicecatalogPortfolioStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig">SagemakerServicecatalogPortfolioStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig">SagemakerServicecatalogPortfolioStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isConstruct"></a>

```typescript
import { sagemakerServicecatalogPortfolioStatus } from '@cdktf/provider-aws'

sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformElement"></a>

```typescript
import { sagemakerServicecatalogPortfolioStatus } from '@cdktf/provider-aws'

sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformResource"></a>

```typescript
import { sagemakerServicecatalogPortfolioStatus } from '@cdktf/provider-aws'

sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerServicecatalogPortfolioStatusConfig <a name="SagemakerServicecatalogPortfolioStatusConfig" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.Initializer"></a>

```typescript
import { sagemakerServicecatalogPortfolioStatus } from '@cdktf/provider-aws'

const sagemakerServicecatalogPortfolioStatusConfig: sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_servicecatalog_portfolio_status#status SagemakerServicecatalogPortfolioStatus#status}. |
| <code><a href="#@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_servicecatalog_portfolio_status#id SagemakerServicecatalogPortfolioStatus#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_servicecatalog_portfolio_status#status SagemakerServicecatalogPortfolioStatus#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerServicecatalogPortfolioStatus.SagemakerServicecatalogPortfolioStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_servicecatalog_portfolio_status#id SagemakerServicecatalogPortfolioStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



