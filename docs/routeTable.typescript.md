# `routeTable` Submodule <a name="`routeTable` Submodule" id="@cdktf/provider-aws.routeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RouteTable <a name="RouteTable" id="@cdktf/provider-aws.routeTable.RouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table aws_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

new routeTable.RouteTable(scope: Construct, id: string, config: RouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig">RouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableConfig">RouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws">resetPropagatingVgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.routeTable.RouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.routeTable.RouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute"></a>

```typescript
public putRoute(value: IResolvable | RouteTableRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: RouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.routeTable.RouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPropagatingVgws` <a name="resetPropagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws"></a>

```typescript
public resetPropagatingVgws(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-aws.routeTable.RouteTable.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.routeTable.RouteTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

routeTable.RouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

routeTable.RouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

routeTable.RouteTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput">propagatingVgwsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws">propagatingVgws</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.routeTable.RouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTable.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.routeTable.RouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.routeTable.RouteTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.routeTable.RouteTable.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTable.property.route"></a>

```typescript
public readonly route: RouteTableRouteList;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: RouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `propagatingVgwsInput`<sup>Optional</sup> <a name="propagatingVgwsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput"></a>

```typescript
public readonly propagatingVgwsInput: string[];
```

- *Type:* string[]

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | RouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> | cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `propagatingVgws`<sup>Required</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws"></a>

```typescript
public readonly propagatingVgws: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTable.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RouteTableConfig <a name="RouteTableConfig" id="@cdktf/provider-aws.routeTable.RouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableConfig.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

const routeTableConfig: routeTable.RouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws">propagatingVgws</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws"></a>

```typescript
public readonly propagatingVgws: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.route"></a>

```typescript
public readonly route: IResolvable | RouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RouteTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#timeouts RouteTable#timeouts}

---

### RouteTableRoute <a name="RouteTableRoute" id="@cdktf/provider-aws.routeTable.RouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableRoute.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

const routeTableRoute: routeTable.RouteTableRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId">carrierGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}. |

---

##### `carrierGatewayId`<sup>Optional</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId"></a>

```typescript
public readonly carrierGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}.

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}.

---

##### `egressOnlyGatewayId`<sup>Optional</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}.

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}.

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}.

---

### RouteTableTimeouts <a name="RouteTableTimeouts" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

const routeTableTimeouts: routeTable.RouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RouteTableRouteList <a name="RouteTableRouteList" id="@cdktf/provider-aws.routeTable.RouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

new routeTable.RouteTableRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get"></a>

```typescript
public get(index: number): RouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>[]

---


### RouteTableRouteOutputReference <a name="RouteTableRouteOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

new routeTable.RouteTableRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId">resetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn">resetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId">resetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCarrierGatewayId` <a name="resetCarrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId"></a>

```typescript
public resetCarrierGatewayId(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetCoreNetworkArn` <a name="resetCoreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```typescript
public resetCoreNetworkArn(): void
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```typescript
public resetDestinationPrefixListId(): void
```

##### `resetEgressOnlyGatewayId` <a name="resetEgressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```typescript
public resetEgressOnlyGatewayId(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId"></a>

```typescript
public resetLocalGatewayId(): void
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId"></a>

```typescript
public resetNatGatewayId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```typescript
public resetVpcPeeringConnectionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput">carrierGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId">carrierGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `carrierGatewayIdInput`<sup>Optional</sup> <a name="carrierGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput"></a>

```typescript
public readonly carrierGatewayIdInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```typescript
public readonly coreNetworkArnInput: string;
```

- *Type:* string

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```typescript
public readonly destinationPrefixListIdInput: string;
```

- *Type:* string

---

##### `egressOnlyGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```typescript
public readonly egressOnlyGatewayIdInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput"></a>

```typescript
public readonly localGatewayIdInput: string;
```

- *Type:* string

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```typescript
public readonly natGatewayIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `carrierGatewayId`<sup>Required</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId"></a>

```typescript
public readonly carrierGatewayId: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

---

##### `egressOnlyGatewayId`<sup>Required</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RouteTableRoute | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a> | cdktf.IResolvable

---


### RouteTableTimeoutsOutputReference <a name="RouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { routeTable } from '@cdktf/provider-aws'

new routeTable.RouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> | cdktf.IResolvable

---



