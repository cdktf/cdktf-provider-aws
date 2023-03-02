# `locationRouteCalculator` Submodule <a name="`locationRouteCalculator` Submodule" id="@cdktf/provider-aws.locationRouteCalculator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationRouteCalculator <a name="LocationRouteCalculator" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator aws_location_route_calculator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

new locationRouteCalculator.LocationRouteCalculator(scope: Construct, id: string, config: LocationRouteCalculatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig">LocationRouteCalculatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig">LocationRouteCalculatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.putTimeouts"></a>

```typescript
public putTimeouts(value: LocationRouteCalculatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isConstruct"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

locationRouteCalculator.LocationRouteCalculator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformElement"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

locationRouteCalculator.LocationRouteCalculator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformResource"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

locationRouteCalculator.LocationRouteCalculator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorArn">calculatorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference">LocationRouteCalculatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorNameInput">calculatorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorName">calculatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `calculatorArn`<sup>Required</sup> <a name="calculatorArn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorArn"></a>

```typescript
public readonly calculatorArn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.timeouts"></a>

```typescript
public readonly timeouts: LocationRouteCalculatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference">LocationRouteCalculatorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `calculatorNameInput`<sup>Optional</sup> <a name="calculatorNameInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorNameInput"></a>

```typescript
public readonly calculatorNameInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LocationRouteCalculatorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a> | cdktf.IResolvable

---

##### `calculatorName`<sup>Required</sup> <a name="calculatorName" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.calculatorName"></a>

```typescript
public readonly calculatorName: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationRouteCalculatorConfig <a name="LocationRouteCalculatorConfig" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.Initializer"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

const locationRouteCalculatorConfig: locationRouteCalculator.LocationRouteCalculatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.calculatorName">calculatorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#calculator_name LocationRouteCalculator#calculator_name}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#data_source LocationRouteCalculator#data_source}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#description LocationRouteCalculator#description}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#id LocationRouteCalculator#id}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#tags LocationRouteCalculator#tags}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#tags_all LocationRouteCalculator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `calculatorName`<sup>Required</sup> <a name="calculatorName" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.calculatorName"></a>

```typescript
public readonly calculatorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#calculator_name LocationRouteCalculator#calculator_name}.

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#data_source LocationRouteCalculator#data_source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#description LocationRouteCalculator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#id LocationRouteCalculator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#tags LocationRouteCalculator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#tags_all LocationRouteCalculator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LocationRouteCalculatorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#timeouts LocationRouteCalculator#timeouts}

---

### LocationRouteCalculatorTimeouts <a name="LocationRouteCalculatorTimeouts" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.Initializer"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

const locationRouteCalculatorTimeouts: locationRouteCalculator.LocationRouteCalculatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#create LocationRouteCalculator#create}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#delete LocationRouteCalculator#delete}. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#update LocationRouteCalculator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#create LocationRouteCalculator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#delete LocationRouteCalculator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_route_calculator#update LocationRouteCalculator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocationRouteCalculatorTimeoutsOutputReference <a name="LocationRouteCalculatorTimeoutsOutputReference" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { locationRouteCalculator } from '@cdktf/provider-aws'

new locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LocationRouteCalculatorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.locationRouteCalculator.LocationRouteCalculatorTimeouts">LocationRouteCalculatorTimeouts</a> | cdktf.IResolvable

---



