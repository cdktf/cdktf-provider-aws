# `locationPlaceIndex` Submodule <a name="`locationPlaceIndex` Submodule" id="@cdktf/provider-aws.locationPlaceIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationPlaceIndex <a name="LocationPlaceIndex" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_place_index aws_location_place_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

new locationPlaceIndex.LocationPlaceIndex(scope: Construct, id: string, config: LocationPlaceIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig">LocationPlaceIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig">LocationPlaceIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration">putDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration">resetDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataSourceConfiguration` <a name="putDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration"></a>

```typescript
public putDataSourceConfiguration(value: LocationPlaceIndexDataSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---

##### `resetDataSourceConfiguration` <a name="resetDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration"></a>

```typescript
public resetDataSourceConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

locationPlaceIndex.LocationPlaceIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

locationPlaceIndex.LocationPlaceIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

locationPlaceIndex.LocationPlaceIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration">dataSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn">indexArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput">dataSourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSourceConfiguration`<sup>Required</sup> <a name="dataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration"></a>

```typescript
public readonly dataSourceConfiguration: LocationPlaceIndexDataSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a>

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn"></a>

```typescript
public readonly indexArn: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataSourceConfigurationInput`<sup>Optional</sup> <a name="dataSourceConfigurationInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput"></a>

```typescript
public readonly dataSourceConfigurationInput: LocationPlaceIndexDataSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationPlaceIndexConfig <a name="LocationPlaceIndexConfig" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.Initializer"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

const locationPlaceIndexConfig: locationPlaceIndex.LocationPlaceIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration">dataSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}.

---

##### `dataSourceConfiguration`<sup>Optional</sup> <a name="dataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration"></a>

```typescript
public readonly dataSourceConfiguration: LocationPlaceIndexDataSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

data_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source_configuration LocationPlaceIndex#data_source_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}.

---

### LocationPlaceIndexDataSourceConfiguration <a name="LocationPlaceIndexDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.Initializer"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

const locationPlaceIndexDataSourceConfiguration: locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse">intendedUse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}. |

---

##### `intendedUse`<sup>Optional</sup> <a name="intendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse"></a>

```typescript
public readonly intendedUse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocationPlaceIndexDataSourceConfigurationOutputReference <a name="LocationPlaceIndexDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { locationPlaceIndex } from '@cdktf/provider-aws'

new locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse">resetIntendedUse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntendedUse` <a name="resetIntendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse"></a>

```typescript
public resetIntendedUse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput">intendedUseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse">intendedUse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intendedUseInput`<sup>Optional</sup> <a name="intendedUseInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput"></a>

```typescript
public readonly intendedUseInput: string;
```

- *Type:* string

---

##### `intendedUse`<sup>Required</sup> <a name="intendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse"></a>

```typescript
public readonly intendedUse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LocationPlaceIndexDataSourceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---



