# `ecsClusterCapacityProviders` Submodule <a name="`ecsClusterCapacityProviders` Submodule" id="@cdktf/provider-aws.ecsClusterCapacityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviders <a name="EcsClusterCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

new ecsClusterCapacityProviders.EcsClusterCapacityProviders(scope: Construct, id: string, config: EcsClusterCapacityProvidersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy">putDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders">resetCapacityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy">resetDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDefaultCapacityProviderStrategy` <a name="putDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy"></a>

```typescript
public putDefaultCapacityProviderStrategy(value: IResolvable | EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]

---

##### `resetCapacityProviders` <a name="resetCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders"></a>

```typescript
public resetCapacityProviders(): void
```

##### `resetDefaultCapacityProviderStrategy` <a name="resetDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy"></a>

```typescript
public resetDefaultCapacityProviderStrategy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput">capacityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput">defaultCapacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders">capacityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a>

---

##### `capacityProvidersInput`<sup>Optional</sup> <a name="capacityProvidersInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput"></a>

```typescript
public readonly capacityProvidersInput: string[];
```

- *Type:* string[]

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `defaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="defaultCapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput"></a>

```typescript
public readonly defaultCapacityProviderStrategyInput: IResolvable | EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `capacityProviders`<sup>Required</sup> <a name="capacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders"></a>

```typescript
public readonly capacityProviders: string[];
```

- *Type:* string[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProvidersConfig <a name="EcsClusterCapacityProvidersConfig" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.Initializer"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

const ecsClusterCapacityProvidersConfig: ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders">capacityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}.

---

##### `capacityProviders`<sup>Optional</sup> <a name="capacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders"></a>

```typescript
public readonly capacityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}.

---

##### `defaultCapacityProviderStrategy`<sup>Optional</sup> <a name="defaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: IResolvable | EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.Initializer"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

const ecsClusterCapacityProvidersDefaultCapacityProviderStrategy: ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

new ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>[]

---


### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { ecsClusterCapacityProviders } from '@cdktf/provider-aws'

new ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a> | cdktf.IResolvable

---



