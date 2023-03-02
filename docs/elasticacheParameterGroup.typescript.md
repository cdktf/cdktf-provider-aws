# `elasticacheParameterGroup` Submodule <a name="`elasticacheParameterGroup` Submodule" id="@cdktf/provider-aws.elasticacheParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheParameterGroup <a name="ElasticacheParameterGroup" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group aws_elasticache_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

new elasticacheParameterGroup.ElasticacheParameterGroup(scope: Construct, id: string, config: ElasticacheParameterGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig">ElasticacheParameterGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig">ElasticacheParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.putParameter"></a>

```typescript
public putParameter(value: IResolvable | ElasticacheParameterGroupParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList">ElasticacheParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.parameter"></a>

```typescript
public readonly parameter: ElasticacheParameterGroupParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList">ElasticacheParameterGroupParameterList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | ElasticacheParameterGroupParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheParameterGroupConfig <a name="ElasticacheParameterGroupConfig" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.Initializer"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

const elasticacheParameterGroupConfig: elasticacheParameterGroup.ElasticacheParameterGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.family">family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#family ElasticacheParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#name ElasticacheParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#description ElasticacheParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#id ElasticacheParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#tags ElasticacheParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#tags_all ElasticacheParameterGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#family ElasticacheParameterGroup#family}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#name ElasticacheParameterGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#description ElasticacheParameterGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#id ElasticacheParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | ElasticacheParameterGroupParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#parameter ElasticacheParameterGroup#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#tags ElasticacheParameterGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#tags_all ElasticacheParameterGroup#tags_all}.

---

### ElasticacheParameterGroupParameter <a name="ElasticacheParameterGroupParameter" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter.Initializer"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

const elasticacheParameterGroupParameter: elasticacheParameterGroup.ElasticacheParameterGroupParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#name ElasticacheParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#value ElasticacheParameterGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#name ElasticacheParameterGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group#value ElasticacheParameterGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheParameterGroupParameterList <a name="ElasticacheParameterGroupParameterList" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

new elasticacheParameterGroup.ElasticacheParameterGroupParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.get"></a>

```typescript
public get(index: number): ElasticacheParameterGroupParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheParameterGroupParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a>[]

---


### ElasticacheParameterGroupParameterOutputReference <a name="ElasticacheParameterGroupParameterOutputReference" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer"></a>

```typescript
import { elasticacheParameterGroup } from '@cdktf/provider-aws'

new elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheParameterGroupParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheParameterGroup.ElasticacheParameterGroupParameter">ElasticacheParameterGroupParameter</a> | cdktf.IResolvable

---



